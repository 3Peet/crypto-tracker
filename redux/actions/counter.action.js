import {INCREMENT, DECREMENT, ADD} from "../actionTypes";

const setIncrementAction = () => ({
	type: INCREMENT,
});

const setDecrementAction = () => ({
	type: DECREMENT,
});

const setAddAction = (value) => ({
	type: ADD,
	payload: value,
});

export const onIncrement = () => {
	return (dispatch) => {
		dispatch(setIncrementAction());
	};
};

export const onDecrement = () => {
	return (dispatch) => {
		dispatch(setDecrementAction());
	};
};

export const onAdd = (value) => {
	return (dispatch) => {
		dispatch(setAddAction(value));
	};
};
