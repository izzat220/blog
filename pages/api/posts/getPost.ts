import type { NextApiRequest, NextApiResponse } from "next";
import PostModel from "../../../models/BlogModel";
import connectMongo from "../../../utils/connectMongo";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await connectMongo(res);

	let { id } = req.query;

	if (!id) {
		return res.status(400).json({ message: "Missing Post ID" });
	}

	let post = await PostModel.findOne({ _id: id });

	if (!post) {
		return res.status(404).json({ message: "Post Not Found" });
	}

	return res.status(200).json(post);
}
