export const GET_PAIR_DATA_FETCH = "GET_PAIR_DATA_FETCH";
export const GET_PAIR_DATA_SUCCESS = "GET_PAIR_DATA_SUCCESS";
export const GET_PAIR_DATA_FAILURE = "GET_PAIR_DATA_FAILURE";

export const getPairDataFetch = (pair) => ({
	type: GET_PAIR_DATA_FETCH,
	pair,
});
