import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getPairDataFetch} from "/redux/actions/pairData.action";
const Market = () => {
	const router = useRouter();
	const {pair} = router.query;
	const dispatch = useDispatch();

	const pairData = useSelector(
		({pairDataReducer}) => pairDataReducer.pairData.lastPrice
	);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(getPairDataFetch(pair.toLowerCase()));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<h1>
			{pair.replace("_", "/")}: {pairData}
		</h1>
	);
};

export default Market;
