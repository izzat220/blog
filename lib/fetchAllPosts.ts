import posts from "../posts/index.json";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const fetchAllPosts = async () => {
	let newPosts: any[] = [];

	posts.forEach((post) => {
		const postContent = fs.readFileSync(
			path.join(`posts/post-${post.id}.mdx`),
			"utf8"
		);
		const { data, content } = matter(postContent);
		newPosts.push({ ...post, content });
	});

	return newPosts;
};

export default fetchAllPosts;
