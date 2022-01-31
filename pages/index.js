import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {
	ADD_REQ,
	DECREMENT_REQ,
	INCREMENT_REQ,
	INCREMENT_ASYNC_REQ,
} from "../redux/types";

export default function Home() {
	const dispatch = useDispatch();

	const action = (type, payload) => dispatch({type, payload});
	const counterReducer = useSelector(({counterReducer}) => counterReducer);

	return (
		<>
			<div>
				<button onClick={() => action(INCREMENT_ASYNC_REQ)}>
					Increment after 1 sec.
				</button>
				<button onClick={() => action(INCREMENT_REQ)}>Increment</button>
				<button onClick={() => action(DECREMENT_REQ)}>Decrement</button>
				<button onClick={() => action(ADD_REQ, 10)}>ADD 10</button>
				<hr />
				<h1>Clicked : {counterReducer.count}</h1>
			</div>
		</>
	);
}
