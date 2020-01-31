import { applyMiddleware, createStore, compose, Store } from "redux";
import { createLogger, LogEntryObject } from "redux-logger";
import { IApplicationState, rootReducer } from "./ducks";
import sagaMiddleware from "./middlewares/saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const middlewares = [sagaMiddleware];
  const enhancers = [];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(
      // @ts-ignore
      createLogger({
        collapsed: (
          _getState: () => any,
          action: any,
          logEntry: LogEntryObject
        ) => !logEntry.error
      })
    );

    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const composeEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  const store = createStore(rootReducer, initialState, composeEnhancers);
  // @ts-ignore
  store.runSaga = sagaMiddleware.run;

  return store;
}
