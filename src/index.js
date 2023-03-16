import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import "antd/dist/antd.min.css";
=======
// import "antd/dist/antd.css";
>>>>>>> ecf4dc2613aa99834568136f941af538a254dc72
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
