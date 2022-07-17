import { formatDate } from '@/utils';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
	const socialLinks = [
		{ icon: Facebook, url: 'https://www.facebook.com/' },
		{ icon: Instagram, url: 'https://www.instagram.com/' },
		{ icon: LinkedIn, url: 'https://www.linkedin.com/' },
		{ icon: YouTube, url: 'https://www.youtube.com/' },
	];
	return (
		<Box component={'footer'} py={2} textAlign='center'>
			<Stack direction={'row'} justifyContent='center'>
				{socialLinks.map((item, index) => (
					<Box key={index} component='a' p={2} href={item.url} target='_blank' rel='noopener noreferrer'>
						<Icon component={item.icon} sx={{ fontSize: 36 }} />
					</Box>
				))}
			</Stack>
			<Typography variant='body2'>
				Copyright ©{new Date().getFullYear()} All rights reserved
			</Typography>
		</Box>
	);
}
