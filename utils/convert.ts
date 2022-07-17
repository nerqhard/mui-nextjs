import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog } from '@/models';
import { serialize } from 'next-mdx-remote/serialize';

/** Get path blog folder */
const BLOG_FOLDER = path.join(process.cwd(), 'blog');

export async function getBlogList(): Promise<Blog[]> {
	/** Get list file name in Blog folder */
	const fileNameList = fs.readdirSync(BLOG_FOLDER);
	const result: Blog[] = [];

	for (const fileName of fileNameList) {
		const filePath = path.join(BLOG_FOLDER, fileName);
		const fileContents = fs.readFileSync(filePath, 'utf-8');

		/** Read all markdown files */
		const { data, excerpt, content } = matter(fileContents);
		result.push({
			id: fileName,
			title: data.title,
			description: data.desc,
			publishedDate: data.date,
			tagList: data.tags,
			slug: data.slug,
			author: {
				name: data.author,
				title: data.author_title,
				url: data.author_url,
				iamge_url: data.author_image_url,
			},
			mdContent: content,
		});
	}

	return result;
}

export const  renderMarkdown = (markdownContent: string) => {
	return serialize(markdownContent || '')
};
