import { Blog } from '@/models';
import { formatDate } from '@/utils';
import { Box, Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface BlogItemProps {
	blog: Blog;
}

export function BlogItem({ blog }: BlogItemProps) {
	if (!blog) return null;

	const { title, publishedDate, tagList, description } = blog;

	return (
		<Box>
			<Stack>
				<Typography variant='h5' fontWeight='bold'>
					{title}
				</Typography>
				<Stack direction={'row'} my={2}>
					<Typography variant='body1'>{formatDate(publishedDate)}</Typography>
					<Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
					<Typography variant='body1' color='info.main'>{tagList?.join(', ')}</Typography>
				</Stack>
				<Typography variant='body2'>{description}</Typography>
			</Stack>
		</Box>
	);
}
