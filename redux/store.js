import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSage from "./sagas";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSage);

export default store;
