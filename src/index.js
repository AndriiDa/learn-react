import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import store from "./store";
import theme from './ui/theme'
import App from "./App";
import "./styles.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>      
    </BrowserRouter>
  </Provider>,
  rootElement
);
