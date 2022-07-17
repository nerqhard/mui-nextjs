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
				thumbnailUrl: 'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657998466/mui-nextjs/43BE3FAA-7F2F-4D0D-A5CB-FC86D2CAB471_1_105_c_m062du.jpg',
			}} />
			<WorkSection />
		</Box>
	);
}

WorksPage.Layout = MainLayout;
