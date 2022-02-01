import {GET_PAIR_DATA_SUCCESS} from "../actions/pairData.action";

const pairDataReducer = (state = {pairData: []}, action) => {
	switch (action.type) {
		case GET_PAIR_DATA_SUCCESS:
			return {
				...state,
				pairData: action.pairData,
			};

		default:
			return state;
	}
};

export default pairDataReducer;
