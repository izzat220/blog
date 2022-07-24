import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import moment from "moment";
import testGetPosts from "../lib/testGetPosts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const Home: NextPage = ({ content }: any) => {
	const arr = [1, 2, 3, 4, 5];
	return (
		<Layout>
			<div className="w-full flex flex-col space-y-16 mb-20">
				<div className="w-full flex flex-col space-y-10 ">
					<div className="flex flex-col w-full space-y-2">
						<h1 className="text-3xl">Lorem, ipsum dolor sit amet consectetur</h1>
						<h4 className="text-gray-400 text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h4>
					</div>
					<div className="flex items-center justify-between w-full text-sm text-gray-500">
						<span>Posted on Jul 18th, 2021</span>

						<span className="bg-gray-100 rounded-full px-2 py-1">Programming</span>

						<div className="flex space-x-3 items-center">
							<i className="fas fa-share-nodes" />
							<i className="fas fa-comment" />
							<i className="fas fa-thumbs-up" />
						</div>
					</div>
					<img
						src="https://miro.medium.com/max/700/1*P53XwGATMLBW1xktlG2D9g.jpeg"
						alt="hey"
						className="rounded-lg"
					/>
				</div>

				<div className="mt-12 prose">
					<MDXRemote {...content} />
				</div>
			</div>
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	const data = await testGetPosts();
	const mdxSource = await serialize(data);

	return {
		props: {
			content: mdxSource,
		},
	};
}
