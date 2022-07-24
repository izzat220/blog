import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import moment from "moment";
import Image from "next/image";

const Home: NextPage = ({}: any) => {
	const arr = [1, 2, 3, 4, 5];
	return (
		<Layout>
			<div className="w-full flex flex-col space-y-16 mb-20">
				<div className="flex flex-col w-full space-y-5">
					<div className="flex w-full items-center justify-between">
						<span className="text-3xl font-medium mb-2">
							{"Izzat Alolwani's Blog"}
						</span>
						<div className="flex space-x-4 items-center text-gray-400">
							<i className="fab fa-linkedin"></i>
							<i className="fab fa-github"></i>
							<i className="fab fa-twitter"></i>
							<i className="fas fa-user"></i>
						</div>
					</div>

					<Image
						src="/great-wave.jpeg"
						alt="great wave off kanagawa"
						className="rounded-lg"
						width={400}
						height={400}
					/>
				</div>

				<div className="flex space-x-10">
					<div className="flex flex-col">
						<div className="flex flex-col h-full">
							<span className="text-2xl font-medium mb-2">Bit About Me</span>
							<p className="text-gray-500">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
								cupiditate, asperiores tempora numquam suscipit laborum reprehenderit
								reiciendis fuga quibusdam voluptatibus vero alias dolore doloribus!
							</p>
							<a className="text-sm text-gray-500 underline mt-5 cursor-pointer">
								<i className="fas fa-share-alt mr-2" />
								Get In Touch
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full ">
					<div className="flex items-center w-full justify-between mb-10">
						<span className="text-2xl font-medium">Recent Posts</span>
						<a className="text-sm text-gray-500 underline cursor-pointer">
							View All Posts
						</a>
					</div>

					{/* <div className="flex flex-col w-full space-y-10">
						{posts.map((item: any) => (
							<div key={item} className="flex w-full space-x-5">
								<div className="flex flex-col w-full">
									<div className="flex flex-col w-full h-full">
										<span className="font-semibold text-lg mb-2">{item.title}</span>
										<span className="text-sm text-gray-400">{item.subTitle}</span>
									</div>

									<span className="text-xs text-gray-500">
										Posted on {moment(item.createdAt).format("DD/MM/YYYY HH:mm")}
									</span>
								</div>
								<img src={item.image} alt="hey" className="rounded-lg" width={220} />
							</div>
						))}
					</div> */}
				</div>
			</div>
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	return {
		props: {},
	};
}
