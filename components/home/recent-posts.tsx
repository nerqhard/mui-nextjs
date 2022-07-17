import { Blog, Post } from '@/models';
import { Box, Stack, Typography, Link as MuiLink } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';

export function RecentPosts() {
	const postList: Blog[] = [
		{
			id: 1,
			title: 'Making a design system from scratch',
			publishedDate: '2022-07-17T04:04:51.904Z',
			tagList: ['Design', 'Pattern'],
			mdContent: '',
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: 2,
			title: 'Creating pixel perfect icons in Figma',
			publishedDate: '2022-07-17T04:04:51.904Z',
			tagList: ['Figma', 'Icon Design'],
			mdContent: '',
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
	];

	return (
		<Box component={'section'} bgcolor='secondary.light' pt={2} pb={4}>
			<Container>
				<Stack
					direction={'row'}
					mb={2}
					justifyContent={{
						xs: 'center',
						md: 'space-between',
					}}
					alignItems={'center'}
				>
					<Typography variant='h5'>Recent Posts</Typography>
					<Link href='/blog' passHref>
						<MuiLink
							sx={{
								display: {
									xs: 'none',
									md: 'inline-block',
								},
							}}
							color='text.secondary'
						>
							View all
						</MuiLink>
					</Link>
				</Stack>
				<Stack
					direction={{
						xs: 'column',
						md: 'row',
					}}
					sx={{
						'& > div': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
					spacing={3}
				>
          {
            postList.map(
              (post) => <Box key={post.id}>
                <PostCard post={post}/>
            </Box>
            )
          }
				</Stack>
			</Container>
		</Box>
	);
}
