import { BlogList } from '@/components/blog/blog-list';
import { Seo } from '@/components/common';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import * as React from 'react';

export interface IBlogPageProps {}

export default function BlogPage(props: IBlogPageProps) {
	return (
		<Box>
			<Seo data={{
				title: 'Blogs | MUI NextJS | NQH',
				description: 'Build a profile website using NextJS, ReactJS and Material UI',
				url: 'https://mui-nqh.vercel.app/',
				thumbnailUrl: 'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657998466/mui-nextjs/43BE3FAA-7F2F-4D0D-A5CB-FC86D2CAB471_1_105_c_m062du.jpg',
			}} />
			<BlogList />
		</Box>
	);
}
BlogPage.Layout = MainLayout;
