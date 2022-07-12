import type { NextApiRequest, NextApiResponse } from "next";
import PostModel from "../../../models/BlogModel";
import connectMongo from "../../../utils/connectMongo";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await connectMongo(res);

	let posts = await PostModel.find().sort({ createdAt: -1 }).limit(5);

	return res.status(200).json(posts);
}
