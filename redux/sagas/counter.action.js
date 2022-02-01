import {put, delay, takeEvery} from "redux-saga/effects";
import {
	INCREMENT,
	DECREMENT,
	ADD,
	INCREMENT_REQ,
	INCREMENT_ASYNC_REQ,
	DECREMENT_REQ,
	ADD_REQ,
} from "../types";

export function* setIncrementAction() {
	yield put({type: INCREMENT});
}

export function* setIncrementAsyncAction() {
	yield delay(1000);
	yield put({type: INCREMENT});
}

export function* setDecrementAction() {
	yield put({type: DECREMENT});
}

export function* setAddAction({payload}) {
	yield put({type: ADD, payload});
}

export function* watchIncrementAction() {
	yield takeEvery(INCREMENT_REQ, setIncrementAction);
}

export function* watchIncrementAsyncAction() {
	yield takeEvery(INCREMENT_ASYNC_REQ, setIncrementAsyncAction);
}

export function* watchDecrementAction() {
	yield takeEvery(DECREMENT_REQ, setDecrementAction);
}

export function* watchAddAction() {
	yield takeEvery(ADD_REQ, setAddAction);
}
