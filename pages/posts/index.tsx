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
				<div className="flex flex-col w-full space-y-16">
					{posts.map((item: MetaData) => {
						return (
							<Link href={`/posts/${item.id}`} key={item.id}>
								<div className="flex w-full space-x-16 cursor-pointer">
									<div className="flex flex-col w-full">
										<div className="flex flex-col w-full h-full">
											<span className="font-semibold text-xl mb-1">{item.title}</span>
											<span className="text-sm text-gray-500 mb-5">{item.subTitle}</span>

											<div className="text-xs text-gray-400 flex items-center justify-between w-full">
												<span>{item.postedOn}</span>

												<div className="flex items-center space-x-3">
													<div className="flex items-center space-x-2">
														{item.tags.map((tag: string) => (
															<span key={tag} className="bg-gray-100 rounded-full px-2 py-1">
																{tag}
															</span>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>

									<img
										src={`/${item.image}`}
										alt="great wave off kanagawa"
										className="rounded-lg w-[200px]"
									/>
								</div>
							</Link>
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
