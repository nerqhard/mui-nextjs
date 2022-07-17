import { Box, Button, Stack, Typography } from '@mui/material';
import { color, Container } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import avatar from '@/images/avatar.png';

export function HeroSection() {
	return (
		<Box component={'section'} pt={{ xs: 4, md: 12 }} pb={{ xs: 7, md: 9 }}>
			<Container>
				<Stack
					direction={{ xs: 'column-reverse', md: 'row' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
					textAlign={{ xs: 'center', md: 'left' }}
					spacing={8}
				>
					<Box>
						<Typography
							component='h1'
							variant='h3'
							fontWeight='bold'
							mb={{ xs: 3.5, md: 5 }}
						>
							Hi, I am Quang Ha, <br />
							Web Developer
						</Typography>
						<Typography variant='body1' mb={{ xs: 3.5, md: 5 }}>
							2+ years experienced React Developer with hands-on experience in
							identifying web-based user interactions along with designing
							implementing highly responsive user interface components by
							deploying React concepts. Adept at monitoring &
							maintaining front performance and troubleshooting & debugging the
							same to bolster overall performance.
						</Typography>
						<Button variant='contained' size='large'>
							Download Resume
						</Button>
					</Box>
					<Box
						sx={{
							minWidth: '240px',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
							borderRadius: '50%',
						}}
					>
						<Image src={avatar} alt='Avatar' layout='responsive'></Image>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
