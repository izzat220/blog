import React from "react";
import { Nav } from "./Nav";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="w-full flex flex-col items-center px-5">
			<div className="max-w-2xl w-full flex flex-col items-center">
				<Nav />
				<div className="w-full flex flex-col items-center">{children}</div>
			</div>
		</div>
	);
};
