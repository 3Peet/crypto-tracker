import {
	FETCH_24HRS_TICKER,
	FETCH_24HRS_TICKER_SUCCESS,
	FETCH_24HRS_TICKER_FAILURE,
	START_POLLING,
	STOP_POLLING,
} from "../actions/market.action";

const defaultStateList = {
	isFetching: false,
	items: [],
	error: {},
	isPolling: false,
};
const marketReducer = (state = defaultStateList, action) => {
	switch (action.type) {
		case FETCH_24HRS_TICKER:
			return {...state, isFetching: true};
		case FETCH_24HRS_TICKER_SUCCESS:
			return {...state, isFetching: false, items: action.data};
		case FETCH_24HRS_TICKER_FAILURE:
			return {...state, isFetching: false, error: action.data};
		case START_POLLING:
			return {...state, isPolling: true};
		case STOP_POLLING:
			return {...state, isPolling: false};
		default:
			return state;
	}
};

export default marketReducer;
