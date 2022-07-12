import React from "react";

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
	return (
		<div className="flex flex-col items-start space-y-4">
			<button className="border-[1.5px] rounded-full border-black px-4 font">
				Post
			</button>

			<div className="flex flex-col drop-shadow-lg rounded-lg bg-white w-[224px] p-3 text-sm space-y-3">
				<span className="text-gray-400 ">When to post?</span>

				<div className="flex flex-col">
					<span className="rounded p-2">
						<i className="far fa-circle mr-1" /> Email Only
					</span>
					<span className="bg-gray-50 rounded p-2">
						<i className="fas fa-check-circle mr-1" /> Blog Only
					</span>
					<span className="rounded p-2">
						<i className="far fa-circle mr-1" /> Both
					</span>
				</div>

				<div className="w-full bg-gray-50 rounded p-3 space-y-3">
					<span>Schedule a time to post</span>

					<div className="bg-white rounded shadow p-3">
						<span>
							<i className="far fa-clock mr-1" /> 24 May 2020
						</span>
					</div>
					<div className="bg-white rounded shadow p-3">
						<span>
							<i className="far fa-clock mr-1" /> 9:30 PM
						</span>
					</div>
				</div>

				<button className="rounded-full bg-black text-white px-3 py-1 font-medium">
					Schedule to Post
				</button>

				<button className="rounded-full px-3 py-1 font-medium">
					Schedule to Post
				</button>
			</div>
		</div>
	);
};

export default Post;
