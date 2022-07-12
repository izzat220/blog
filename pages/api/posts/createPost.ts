import type { NextApiRequest, NextApiResponse } from "next";
import PostModel from "../../../models/BlogModel";
import connectMongo from "../../../utils/connectMongo";
import moment from "moment";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await connectMongo(res);

	let { title, subTitle, image, content } = req.body;

	await PostModel.create({
		title,
		subTitle,
		content,
		image,
		likes: 0,
		views: 0,
		createdAt: moment().toISOString(),
	})
		.then((doc: any) => {
			return res.status(200).json(doc);
		})
		.catch((err: any) => {
			return res.status(500).json({ message: "DB Error Occurred" });
		});
}
