import { Post } from '@/models';
import { formatDate } from '@/utils';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface PostCardProps {
	post: Post;
}

export function PostCard({ post }: PostCardProps) {
	if (!post) return null
	
	return (
		<Card>
			<CardContent>
				<Typography variant='h5' fontWeight='bold'>
					{post.title}
				</Typography>
				<Stack direction={'row'} my={2}>
					<Typography variant='body1'>{formatDate(post.publishedDate)}</Typography>
					<Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
					<Typography variant='body1'>{post.tagList?.join(', ')}</Typography>
				</Stack>
				<Typography variant='body2'>{post.description}</Typography>
			</CardContent>
		</Card>
	);
}
