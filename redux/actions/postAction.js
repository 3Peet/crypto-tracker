import {GET_POSTS} from "../types";

export const fetchposts = () => async (dispath) => {
	// const res = await axios.get('api/posts')
	dispath({
		type: GET_POSTS,
		payload: ["1st post", "2nd post", "3rd post"],
	});
};
