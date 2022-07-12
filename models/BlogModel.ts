import mongoose, { Schema, model } from "mongoose";

interface IPost {
	title: string;
	subTitle?: string;
	likes?: number;
	views?: number;
	image?: string;
	content: string;
	createdAt: string;
}

const postSchema = new Schema<IPost>({
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
	},
	likes: {
		type: Number,
		default: 0,
	},
	views: {
		type: Number,
		default: 0,
	},
	image: {
		type: String,
	},

	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		required: true,
		index: true,
	},
});

const PostModel =
	mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);

export default PostModel;
