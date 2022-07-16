import { Stack, Container, Link as MuiLink } from '@mui/material';
import clsx from 'clsx';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ROUTE_LIST } from './routes';

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
	const router = useRouter();

	return (
		<Box display={{ xs: 'none', md: 'block' }} sx={{ py: '16px' }}>
			<Container>
				<Stack direction={'row'} justifyContent='flex-end'>
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path} passHref>
							<MuiLink
								className={clsx({ active: router.pathname === route.path })}
								sx={{ ml: 2 }}
								fontWeight='medium'
							>
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	);
}
