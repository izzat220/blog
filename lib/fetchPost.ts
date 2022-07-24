import posts from "../posts/index.json";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const fetchPost = async (id: number) => {
	let metaData = posts.find((item) => item.id === id);
	const postContent = fs.readFileSync(path.join(`posts/post-${id}.mdx`), "utf8");
	const { data, content } = matter(postContent);

	return {
		content,
		metaData,
	};
};

export default fetchPost;
