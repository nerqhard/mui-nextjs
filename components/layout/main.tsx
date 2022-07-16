import { LayoutProps } from '@/model';
import { Box, Container, Stack } from '@mui/material';
import { Footer, Header } from 'components/common';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight={'100vh'}>
			<Header />

			<Box component={'main'} flexGrow={1}>
				<Container maxWidth={'sm'} sx={{ bgcolor: 'primary.main' }}>
					SM
				</Container>
				<Container maxWidth={'md'} sx={{ bgcolor: 'secondary.main' }}>
					MD
				</Container>
				<Link href={'./'}>
					<a>Home</a>
				</Link>

				<Link href={'./blog'}>
					<a>Blog</a>
				</Link>

				<Link href={'./works'}>
					<a>Works</a>
				</Link>
				{children}
			</Box>

			<Footer />
		</Stack>
	);
}
