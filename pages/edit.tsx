import React from "react";
import { Layout } from "../components/Layout";
import { Markdown } from "../components/Markdown";

interface editProps {}

const edit: React.FC<editProps> = ({}) => {
	return (
		<Layout>
			<Markdown />
		</Layout>
	);
};

export default edit;
