import type { NextPage } from "next";
import { Layout } from "../../components/Layout";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fetchAllPosts from "../../lib/fetchAllPosts";
import fetchPost from "../../lib/fetchPost";

const Home: NextPage = ({ post }: any) => {
	return (
		<Layout>
			<div className="w-full flex flex-col space-y-16 mb-20">
				<div className="w-full flex flex-col space-y-10 ">
					<div className="flex flex-col w-full space-y-2">
						<h1 className="text-3xl">{post.title}</h1>
						<h4 className="text-gray-400 text-xl">{post.subTitle}</h4>
					</div>
					<div className="flex items-center justify-between w-full text-sm text-gray-500">
						<span>Posted on {post.postedOn}</span>

						<div className="space-x-3 flex items-center">
							{post.tags.map((item: string) => {
								return (
									<span
										key={item}
										className="bg-gray-100 rounded-full px-2 py-1"
									>
										{item}
									</span>
								);
							})}
						</div>

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
					<MDXRemote {...post.content} />
				</div>
			</div>
		</Layout>
	);
};

export default Home;

export async function getStaticPaths() {
	const posts = await fetchAllPosts();
	const paths = posts.map((item: any) => {
		return {
			params: { id: item.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context: any) {
	let id: string = context.params.id;
	const data: any = await fetchPost(parseInt(id));
	const mdxSource = await serialize(data.content);

	const post = { ...data.metaData, content: mdxSource };

	return {
		props: {
			post,
		},
	};
}
