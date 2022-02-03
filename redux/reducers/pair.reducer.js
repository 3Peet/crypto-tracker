import {
	GET_PAIR_DATA_SUCCESS,
	GET_PAIR_DATA_FETCH,
	GET_PAIR_DATA_FAILURE,
} from "../types";

const pairDataReducer = (
	state = {pairData: [], isFetching: false, error: {}},
	action
) => {
	switch (action.type) {
		case GET_PAIR_DATA_FETCH:
			return {
				...state,
				isFetching: true,
			};
		case GET_PAIR_DATA_SUCCESS:
			return {
				...state,
				pairData: action.pairData,
			};
		case GET_PAIR_DATA_FAILURE:
			return {...state, error: action.error};

		default:
			return state;
	}
};

export default pairDataReducer;
