import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./state";
import { rootSaga } from "./state/ducks";
import MainContainer from "./containers/MainContainer";
// import { startWS } from "./utils/wsClient";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ToastProvider } from "react-toast-notifications";
const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);
// @ts-ignore
store.runSaga(rootSaga);

// const socket = startWS(store.dispatch, store)


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
