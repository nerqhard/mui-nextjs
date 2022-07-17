import { Blog } from '@/models';
import {
	Box,
	Container,
	Divider,
	Link as MuiLink,
	Stack,
	Typography,
} from '@mui/material';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { BlogItem } from './blog-item';

export interface BlogListProps {
	blogs: Blog[];
}

export function BlogList({ blogs }: BlogListProps) {
	return (
		<Box component={'section'} pt={2} pb={4}>
			<Container>
				<Typography component='h1' variant='h3' fontWeight='bold' mb={7}>
					Blog
				</Typography>
				<Box component='ul' sx={{ listStyleType: 'none', p: 0 }}>
					{blogs.map((blog) => (
						<Fragment key={blog.id}>
							<Link href={`/blog/${blog.slug}`} key={blog.id} passHref>
								<MuiLink>
									<BlogItem blog={blog} />
								</MuiLink>
							</Link>
							<Divider sx={{ my: 3 }} />
						</Fragment>
					))}
				</Box>
			</Container>
		</Box>
	);
}
