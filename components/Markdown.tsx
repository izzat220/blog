import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import axios from "axios";

import "highlight.js/styles/dark.css";
import mdSettings from "../lib/mdSettings";

interface MarkdownProps {}

export const Markdown: React.FC<MarkdownProps> = ({}) => {
	const [markdown, setMarkdown] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [subTitle, setSubTitle] = useState<string>("");
	const [image, setImage] = useState<string>("");
	const [imageAlt, setImageAlt] = useState<string>("");
	const [contentTag, setContentTag] = useState<string>("");

	const [previewMarkdown, setPreviewMarkdown] = useState<boolean>(false);

	const createPost = async () => {
		await axios
			.post("/api/posts/createPost", {
				title,
				subTitle,
				image,
				content: markdown,
			})
			.then((res: any) => {
				console.log(res.data);
			})
			.catch((err: any) => {
				console.log(err.response.data);
			});
	};

	return (
		<div className="flex flex-col items-start w-full space-y-10">
			<div className="flex flex-col space-y-5 w-full">
				<div className="flex flex-col space-y-1">
					<span className="text-sm text-gray-400">Post Title</span>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="border-[1px] px-3 py-2 text-sm rounded outline-2 outline-black w-full"
					/>
				</div>

				<div className="flex flex-col space-y-1">
					<span className="text-sm text-gray-400">Post Sub-title</span>
					<input
						value={subTitle}
						onChange={(e) => setSubTitle(e.target.value)}
						className="border-[1px] px-3 py-2 text-sm rounded outline-2 outline-black w-full"
					/>
				</div>

				<div className="flex w-full space-x-5">
					<div className="flex flex-col space-y-1 w-full">
						<span className="text-sm text-gray-400">Image Address</span>
						<input
							value={subTitle}
							onChange={(e) => setSubTitle(e.target.value)}
							className="border-[1px] px-3 py-2 text-sm rounded outline-2 outline-black w-full"
						/>
					</div>

					<div className="flex flex-col space-y-1 w-full">
						<span className="text-sm text-gray-400">Image Alt Text</span>
						<input
							value={subTitle}
							onChange={(e) => setSubTitle(e.target.value)}
							className="border-[1px] px-3 py-2 text-sm rounded outline-2 outline-black w-full"
						/>
					</div>
				</div>

				<div className="flex flex-col space-y-1 w-full">
					<span className="text-sm text-gray-400">Post Tag</span>
					<input
						value={subTitle}
						onChange={(e) => setSubTitle(e.target.value)}
						className="border-[1px] px-3 py-2 text-sm rounded outline-2 outline-black w-full"
					/>
				</div>
			</div>

			{previewMarkdown ? (
				<button onClick={() => setPreviewMarkdown(false)}>Hide Preview</button>
			) : (
				<button onClick={() => setPreviewMarkdown(true)}>View Preview</button>
			)}

			{previewMarkdown ? (
				<ReactMarkdown
					className="w-full"
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={mdSettings}
				>
					{markdown}
				</ReactMarkdown>
			) : (
				<textarea
					value={markdown}
					onChange={(e) => setMarkdown(e.target.value)}
					placeholder="type"
					className="border-[1px] p-5 rounded outline-2 outline-black w-full"
				/>
			)}
		</div>
	);
};
