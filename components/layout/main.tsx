import { LayoutProps } from '@/model';
import { Box, Stack } from '@mui/material';
import { Footer, Header } from 'components/common';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight={'100vh'}>
			<Header />

			<Box component={'main'} flexGrow={1}>
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
