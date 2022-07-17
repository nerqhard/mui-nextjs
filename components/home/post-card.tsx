import { Blog, Post } from '@/models';
import { formatDate } from '@/utils';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { BlogItem } from '../blog';

export interface PostCardProps {
	post: Blog;
}

export function PostCard({ post }: PostCardProps) {
	if (!post) return null
	
	return (
		<Card>
			<CardContent>
				<BlogItem blog={post} />
			</CardContent>
		</Card>
	);
}
