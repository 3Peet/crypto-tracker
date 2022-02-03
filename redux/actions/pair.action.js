import {GET_PAIR_DATA_FETCH, START_POLLING, STOP_POLLING} from "../types";

export const getPairDataFetch = (pair) => ({
	type: GET_PAIR_DATA_FETCH,
	pair,
});

export function startPolling() {
	return {
		type: START_POLLING,
	};
}

export function stopPolling() {
	return {
		type: STOP_POLLING,
	};
}
