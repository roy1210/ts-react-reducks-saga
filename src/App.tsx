import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./state";
import { rootSaga } from "./state/ducks";
import MainContainer from "./containers/MainContainer";
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RESTContainer from "./containers/RESTContainer";
// import { startWS } from "./utils/wsClient";
// import { ToastProvider } from "react-toast-notifications";
const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

// @ts-ignore
store.runSaga(rootSaga);

// const socket = startWS(store.dispatch, store)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/rest" component={RESTContainer} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
