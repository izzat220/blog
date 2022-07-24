import fs from "fs";
import matter from "gray-matter";
import path from "path";

const testGetPosts = () => {
	const fileContents = fs.readFileSync(path.join(`posts/post-1.mdx`), "utf8");
	const { data, content } = matter(fileContents);

	// return {
	// 	data,
	// 	content,
	// };

	return content;
};

export default testGetPosts;
