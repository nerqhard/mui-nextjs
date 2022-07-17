import { Work } from '@/models';
import { Box, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { WorkList } from '../work';

export function FeaturedWorks() {
	const workList: Work[] = [
		{
			id: 1,
			title: 'Designing Dashboards',
			tagList: ['Dashboard'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: 'string',
			createAt: '1657989568257',
			updateAt: '1657989568257',
			thumbnailUrl:
				'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657992601/mui-nextjs/img3_g01ogn.jpg',
		},
		{
			id: 2,
			title: 'Vibrant Portraits of 2020',
			tagList: ['Illustration'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: 'string',
			createAt: '1657989568257',
			updateAt: '1657989568257',
			thumbnailUrl:
				'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657992601/mui-nextjs/img1_wocujy.jpg',
		},
		{
			id: 3,
			title: '36 Days of Malayalam type',
			tagList: ['Typography'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: 'string',
			createAt: '1657989568257',
			updateAt: '1657989568257',
			thumbnailUrl:
				'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657992601/mui-nextjs/img2_nn6arh.jpg',
		},
	];

	return (
		<Box component={'section'} pt={2} pb={4}>
			<Container>
				<Typography variant='h5'>Featured Works</Typography>
				<Stack
					direction={{
						xs: 'column',
						md: 'row',
					}}
					mt={2}
					spacing={3}
				>
					<WorkList workList={workList} />
				</Stack>
			</Container>
		</Box>
	);
}
