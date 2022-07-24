import type { NextPage } from "next";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import allPosts from "../../posts/index.json";
import { MetaData } from "../../interfaces/Post";
import Link from "next/link";

interface Props {
	posts: MetaData[];
}
const Home: NextPage<Props> = ({ posts }) => {
	return (
		<Layout>
			<div className="w-full flex flex-col space-y-16 mb-20">
				<div className="flex flex-col w-full space-y-10">
					{posts.map((item: MetaData) => {
						return (
							<div key={item.id} className="flex w-full space-x-5">
								<div className="flex flex-col w-full">
									<div className="flex flex-col w-full h-full">
										<span className="font-semibold text-lg mb-2">
											{item.title}
										</span>
										<span className="text-sm text-gray-400">
											{item.subTitle}
										</span>
									</div>

									<span className="text-xs text-gray-500">
										Posted on {item.postedOn}
									</span>

									<Link href={`/posts/${item.id}`}>Go To Page</Link>
								</div>

								<Image
									src="/great-wave.jpeg"
									alt="great wave off kanagawa"
									className="rounded-lg"
									width={300}
									height={200}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	return {
		props: { posts: allPosts },
	};
}
