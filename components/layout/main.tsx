import { LayoutProps } from '@/models';
import { Box, Container, Stack } from '@mui/material';
import { Footer, Header } from '@/components/common';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight={'100vh'}>
			<Header />

			<Box component={'main'} flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	);
}
