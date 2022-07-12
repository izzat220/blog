import React from "react";
import { Layout } from "../components/Layout";

interface postProps {}

const post: React.FC<postProps> = ({}) => {
	return (
		<Layout>
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

				<div className="flex flex-col space-y-2">
					<h4 className="text-lg font-bold">Some Random Title</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel id provident
						placeat reiciendis animi sed repudiandae. Eligendi vel eius magnam veniam
						quis accusamus, ipsam deserunt consequatur ab quos quisquam maiores
						distinctio repellendus. Rerum tempora adipisci labore, nulla voluptatem
						est! Labore assumenda nulla ad esse dolore eligendi. Corrupti qui error
						non eveniet architecto saepe, pariatur consequuntur quos adipisci.
						Accusantium quae quam et, cumque laudantium necessitatibus rem. Natus,
						repudiandae aliquam voluptate, necessitatibus eligendi ipsam sunt quas,
						error reprehenderit culpa ex in suscipit architecto. Soluta sapiente
						beatae laboriosam tempora temporibus inventore officia nobis reprehenderit
						maiores nostrum quos enim iure odio provident veritatis magnam ea
						deserunt, repudiandae non dolore cum ipsam. Minus fugit explicabo labore
						beatae numquam. Magni vitae deleniti hic ex laboriosam. Sapiente
						temporibus repudiandae vitae maxime quam. Ipsum tempore dolorem, ipsa
						doloremque vitae odit aut cupiditate quo recusandae. Repellat nostrum
						tempora recusandae enim nemo voluptatum ut vitae ducimus possimus sint!
						Architecto aliquid a ipsa delectus, quo culpa quam beatae perferendis vel
						iste iure excepturi. Veritatis vel pariatur corporis molestiae, ea, et
						maxime quia reprehenderit tempore eos aspernatur doloremque maiores dolor
						totam. Quo ipsa dolorum quis ea. Iusto laudantium voluptates odio,
						reprehenderit voluptatem nulla fugit, id exercitationem nemo nihil
						veritatis error quo quas. Quae nobis sequi suscipit at nam labore. Optio
						mollitia, perferendis alias, ea id accusantium voluptas fugiat aliquam
						suscipit consectetur aspernatur numquam, iusto eos impedit incidunt?
					</p>

					<h4 className="text-lg font-bold">Some Random Title</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel id provident
						placeat reiciendis animi sed repudiandae. Eligendi vel eius magnam veniam
						quis accusamus, ipsam deserunt consequatur ab quos quisquam maiores
						distinctio repellendus. Rerum tempora adipisci labore, nulla voluptatem
						est! Labore assumenda nulla ad esse dolore eligendi. Corrupti qui error
						non eveniet architecto saepe, pariatur consequuntur quos adipisci.
						Accusantium quae quam et, cumque laudantium necessitatibus rem. Natus,
						repudiandae aliquam voluptate, necessitatibus eligendi ipsam sunt quas,
						error reprehenderit culpa ex in suscipit architecto. Soluta sapiente
						beatae laboriosam tempora temporibus inventore officia nobis reprehenderit
						maiores nostrum quos enim iure odio provident veritatis magnam ea
						deserunt, repudiandae non dolore cum ipsam. Minus fugit explicabo labore
						beatae numquam. Magni vitae deleniti hic ex laboriosam. Sapiente
						temporibus repudiandae vitae maxime quam. Ipsum tempore dolorem, ipsa
						doloremque vitae odit aut cupiditate quo recusandae. Repellat nostrum
						tempora recusandae enim nemo voluptatum ut vitae ducimus possimus sint!
						Architecto aliquid a ipsa delectus, quo culpa quam beatae perferendis vel
						iste iure excepturi. Veritatis vel pariatur corporis molestiae, ea, et
						maxime quia reprehenderit tempore eos aspernatur doloremque maiores dolor
						totam.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default post;
