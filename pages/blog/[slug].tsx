import { Blog } from '@/models';
import { getBlogList, renderMarkdown } from '@/utils/convert';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { MainLayout } from '@/components/layout';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import { Seo } from '@/components/common';

export interface BlogDetailProps {
	blog: Blog;
	mdxSource: any;
}

export default function BlogDetail({ blog, mdxSource }: BlogDetailProps) {
	// Convert markdown content to HTML
	return (
		<Box component={'section'}>
			<Seo data={{
				title: `${blog?.title || 'Blog Detail'} | MUI NextJS | NQH`,
				description: 'Build a profile website using NextJS, ReactJS and Material UI',
				url: 'https://mui-nqh.vercel.app/',
				thumbnailUrl: 'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657998466/mui-nextjs/43BE3FAA-7F2F-4D0D-A5CB-FC86D2CAB471_1_105_c_m062du.jpg',
			}} />
			<Container>
				<Typography component='h1' variant='h3' fontWeight='bold' py={5}>{blog?.title}</Typography>
				{mdxSource && <MDXRemote {...mdxSource} />}
			</Container>
		</Box>
	);
}

BlogDetail.Layout = MainLayout;

export const getStaticPaths: GetStaticPaths = async () => {
	const blogList = await getBlogList();

	/** Get all slugs to gen static */
	return {
		paths: blogList?.map((blog: Blog) => ({ params: { slug: blog.slug } })),
		fallback: true, // false or 'blocking'
	};
};

// This function runs only on the server side
// If path of getStaticPaths has 3 objects, then getStaticProps run 3 times
export const getStaticProps: GetStaticProps<BlogDetailProps> = async (
	context: GetStaticPropsContext
) => {
	const blogList = await getBlogList();
	const slug = context.params?.slug;
	if (!slug)
		return {
			notFound: true,
		};

	/** Get blog base on slug */
	const blog = blogList?.find((blog: Blog) => blog.slug === slug);

	if (!blog)
		return {
			notFound: true,
		};

	const mdxSource = await serialize(blog?.mdContent );
	// Props returned will be passed to the page component
	return {
		props: {
			blog,
			mdxSource,
		},
	};
};
