import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import store from "./redux/store";
import Firebase, { FirebaseContext } from "./services/Firebase";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Pages from "./pages/Pages";

const GlobalStyle = createGlobalStyle`
  body, html {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    margin: 0;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

const Root = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas: ". main .";
`;

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
          <BrowserRouter>
            <GlobalStyle />
            <Root>
              <Pages />
            </Root>
          </BrowserRouter>
        </FirebaseContext.Provider>
      </Provider>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
