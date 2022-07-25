import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
	const router = useRouter();

	return (
		<div className="flex w-full items-center justify-between pt-10 pb-5 border-b-[1px] mb-16 text-sm">
			<div className="flex items-center space-x-5 text-gray-400">
				<Link href="/">
					<a
						className={`${router.pathname === "/" ? "font-medium text-black" : ""}`}
					>
						Home
					</a>
				</Link>
				<Link href="/posts">
					<a
						className={`${
							router.pathname === "/posts" ? "font-medium text-black" : ""
						}`}
					>
						Browse
					</a>
				</Link>
				<Link href="/about">
					<a
						className={`${
							router.pathname === "/about" ? "font-medium text-black" : ""
						}`}
					>
						About
					</a>
				</Link>
				<Link href="/contact">
					<a
						className={`${
							router.pathname === "/contact" ? "font-medium text-black" : ""
						}`}
					>
						Contact
					</a>
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
