import Link from "next/link";
import React from "react";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
	return (
		<div className="flex w-full items-center justify-between pt-10 pb-5 border-b-[1px] mb-16 text-sm">
			<div className="flex items-center space-x-5 text-gray-400">
				<Link href="/">
					<a className="font-medium text-black">Home</a>
				</Link>
				<Link href="/one">
					<a>Posts</a>
				</Link>
				<Link href="/edit">
					<a>Edit</a>
				</Link>
			</div>

			<input
				type="text"
				placeholder="Search posts..."
				className="border-[1px] px-2 py-1 rounded w-[250px] outline-none "
			/>
		</div>
	);
};
