import { Blog } from '@/models';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { BlogItem } from './blog-card';

export function BlogList() {
	const blogList: Blog[] = [
		{
			id: 1,
			title: 'UI Interactions of the week',
			publishedDate: '1657989568257',
			tagList: ['Express', 'Handlebars'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: 2,
			title: 'UI Interactions of the week',
			publishedDate: '1657989568257',
			tagList: ['Express', 'Handlebars'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: 3,
			title: 'UI Interactions of the week',
			publishedDate: '1657989568257',
			tagList: ['Express', 'Handlebars'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: 4,
			title: 'UI Interactions of the week',
			publishedDate: '1657989568257',
			tagList: ['Express', 'Handlebars'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
	];

	return (
		<Box component={'section'} pt={2} pb={4}>
			<Container>
				<Typography component='h1' variant='h3' fontWeight='bold' mb={7}>
					Blogs
				</Typography>
				<Stack spacing={4}>
					{blogList.map((blog) => (
						<Fragment key={blog.id}>
							<BlogItem blog={blog} />
							<Divider sx={{ mt: 2, mb: 2 }} />
						</Fragment>
					))}
				</Stack>
			</Container>
		</Box>
	);
}
