import { BlogList } from '@/components/blog';
import { Seo } from '@/components/common';
import { MainLayout } from '@/components/layout';
import { Blog } from '@/models';
import { getBlogList } from '@/utils/convert';
import { Box } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface BlogListPageProps {
	blogs: Blog[];
}

export default function BlogListPage({ blogs }: BlogListPageProps) {
	return (
		<Box>
			<Seo
				data={{
					title: 'Blogs | MUI NextJS | NQH',
					description:
						'Build a profile website using NextJS, ReactJS and Material UI',
					url: 'https://mui-nqh.vercel.app/',
					thumbnailUrl: 'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1658062098/mui-nextjs/img5_qzo3bm.jpg',
				}}
			/>
			<BlogList blogs={blogs} />;
		</Box>
	);
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	/** Convert markdown file into list object JS */
	const blogList = await getBlogList();
	return {
		props: {
			blogs: blogList,
		},
	};
};
