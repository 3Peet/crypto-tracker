import {all, takeEvery} from "redux-saga/effects";
import {
	INCREMENT_REQ,
	DECREMENT_REQ,
	ADD_REQ,
	INCREMENT_ASYNC_REQ,
} from "../types";
import {
	setIncrementAction,
	setDecrementAction,
	setAddAction,
	setIncrementAsyncAction,
} from "./counter.action";

function* watchIncrementAction() {
	yield takeEvery(INCREMENT_REQ, setIncrementAction);
}

function* watchIncrementAsyncAction() {
	yield takeEvery(INCREMENT_ASYNC_REQ, setIncrementAsyncAction);
}

function* watchDecrementAction() {
	yield takeEvery(DECREMENT_REQ, setDecrementAction);
}

function* watchAddAction() {
	yield takeEvery(ADD_REQ, setAddAction);
}

export default function* rootSage() {
	yield all([
		watchIncrementAction(),
		watchDecrementAction(),
		watchAddAction(),
		watchIncrementAsyncAction(),
	]);
}
