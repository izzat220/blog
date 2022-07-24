interface MetaData {
	id: number;
	title: string;
	subTitle: string;
	postedOn: string;
	tags: string[];
	views: number;
	likes: number;
	image: string;
}

interface Post {
	metaData: MetaData;
	content: any;
}

export type { Post, MetaData };
