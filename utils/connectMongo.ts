import mongoose from "mongoose";

const connectMongo = async (res: any) =>
	await mongoose
		.connect("mongodb://localhost:27017/blog-app")
		.catch((err: any) => {
			console.log(err);
			console.log("DB CONNECTION ERROR");
			return res.status(500).json({ message: "DB Connection Error" });
		});

export default connectMongo;
