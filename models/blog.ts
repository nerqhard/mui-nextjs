export interface Author {
	name: string;
	title: string;
	url: string;
	iamge_url: string;
}
export interface Blog {
	id: number | string;
	title: string;
	publishedDate: string;
	tagList: string[];
	description: string;
	slug?: string;
	author?: Author;
	mdContent: string;
	htmlContent?: string;
}
