import {all} from "redux-saga/effects";
import {
	watchIncrementAction,
	watchDecrementAction,
	watchAddAction,
	watchIncrementAsyncAction,
} from "./counter.action";

import mySaga from "./users.saga";

import watchPairData from "./pairData.saga";

export default function* rootSage() {
	yield all([
		watchIncrementAction(),
		watchDecrementAction(),
		watchAddAction(),
		watchIncrementAsyncAction(),
		mySaga(),
		watchPairData(),
	]);
}
