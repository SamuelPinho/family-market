import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCFKwYXvxguqpQKkFp4HM9qYEZd3iYm370",
  authDomain: "local-family.firebaseapp.com",
  databaseURL: "https://local-family.firebaseio.com",
  projectId: "local-family",
  storageBucket: "",
  messagingSenderId: "1089202514475",
  appId: "1:1089202514475:web:e3b40dd6b955f63b"
};

class Firebase {
  constructor() {
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

    this.firestore = app.firestore();
    this.usersCollection = this.firestore.collection("users");
    this.groupsCollection = this.firestore.collection("groups");

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Helper POST Functions ***

  doCreateUser = (email, password, firstName) => {
    return new Promise((resolve, reject) => {
      this.doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          this.usersCollection.doc(authUser.user.uid).set({
            firstName,
            email,
            id_families_participant: [],
            id_families_owner: [],
            id_products: []
          });
        })
        .then(() => {
          resolve();
        })
        .catch(erro => {
          console.log(erro.message);
          reject(erro);
        });
    });
  };

  doCreateGroup = (authUserUid, name) => {
    return new Promise((resolve, reject) => {
      this.groupsCollection
        .add({
          name,
          id_owner: authUserUid,
          id_members: []
        })
        .then(() => {
          resolve();
        })
        .catch(erro => {
          console.log(erro.message);
          reject(erro);
        });
    });
  };

  // *** Helper GET Functions ***

  doGetUserGroups = authUserUid => {
    return new Promise((resolve, reject) => {
      this.groupsCollection
        .where("id_owner", "==", authUserUid)
        .get()
        .then(querySnapshot => {
          let groups = {};

          querySnapshot.forEach(group => {
            groups[group.id] = group.data();
          });

          resolve(groups);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
          reject(error);
        });
    });
  };

  // *** Merge Auth and Firestore User API ***

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.usersCollection.doc(authUser.uid).onSnapshot(snapshot => {
          const firestoreUser = snapshot.data();

          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            ...firestoreUser
          };

          next(authUser);
        });
      } else {
        localStorage.removeItem("authUser");
        fallback();
      }
    });
}

export default Firebase;
