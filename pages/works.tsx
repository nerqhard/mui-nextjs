import { Seo } from '@/components/common';
import { MainLayout } from '@/components/layout';
import { WorkSection } from '@/components/work';
import { Box } from '@mui/material';
import * as React from 'react';

export interface IWorksPageProps {}

export default function WorksPage(props: IWorksPageProps) {
	return (
		<Box>
			<Seo data={{
				title: 'Works | MUI NextJS | NQH',
				description: 'Build a profile website using NextJS, ReactJS and Material UI',
				url: 'https://mui-nqh.vercel.app/',
				thumbnailUrl: 'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1658062098/mui-nextjs/img5_qzo3bm.jpg',
			}} />
			<WorkSection />
		</Box>
	);
}

WorksPage.Layout = MainLayout;
