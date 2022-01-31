import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchposts} from "../redux/actions/postAction";

export default function Home() {
	const dispatch = useDispatch();
	const {posts} = useSelector((state) => state.post);

	useEffect(() => {
		dispatch(fetchposts());
	}, []);

	return (
		<>{posts && posts.map((items, index) => <h1 key={index}>{items}</h1>)}</>
	);
}
