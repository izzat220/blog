import React from "react";
import { Layout } from "../components/Layout";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import mdSettings from "../lib/mdSettings";

interface onePostProps {
	post: any;
}

const one: React.FC<onePostProps> = ({ post }) => {
	return (
		<Layout>
			<div className="w-full flex flex-col space-y-10 ">
				<div className="flex flex-col w-full space-y-2">
					<h1 className="text-3xl">{post.title}</h1>
					<h4 className="text-gray-400 text-xl">{post.subTitle} </h4>
				</div>
				<div className="flex items-center justify-between w-full  text-gray-500">
					<span>Posted on {moment(post.createdAt).format("DD/MM/YYYY HH:mm")}</span>

					<div className="flex space-x-5 items-center">
						<i className="fas fa-share-nodes" />
						<i className="fas fa-comment" />
						<i className="fas fa-thumbs-up" />
					</div>
				</div>
				<img src={post.image} alt="hey" className="rounded-lg" />

				<ReactMarkdown
					className="w-full"
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={mdSettings}
				>
					{post.content}
				</ReactMarkdown>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/posts/getPost");
	const data = await res.json();

	return {
		props: { post: data },
	};
}

export default one;
