import {all} from "redux-saga/effects";

import watchPairData from "./pair.saga";

export default function* rootSage() {
	yield all([watchPairData()]);
}
