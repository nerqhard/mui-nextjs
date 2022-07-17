import React, { Fragment } from 'react';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { WorkList } from './work-list';
import { Work } from '@/models';

export function WorkSection() {
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
		{
			id: 4,
			title: 'Components',
			tagList: ['Components', 'Design'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: 'string',
			createAt: '1657989568257',
			updateAt: '1657989568257',
			thumbnailUrl:
				'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1658026149/mui-nextjs/img4_mdqder.jpg',
		},
	];
	return (
		<Box component={'section'} pt={2} pb={4}>
			<Container>
				<Typography component='h1' variant='h3' fontWeight='bold' mb={7}>
					Works
				</Typography>
				<WorkList workList={workList} isPage />
			</Container>
		</Box>
	);
}
