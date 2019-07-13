import { SET_AUTH_USER } from "../constants";

export const actions = {
  setAuthUser: authUser => ({
    type: SET_AUTH_USER,
    authUser
  })
};
