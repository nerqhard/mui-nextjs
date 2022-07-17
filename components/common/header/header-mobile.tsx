import {
	Button,
	Icon,
	Menu,
	MenuItem,
	Stack,
	Link as MuiLink,
} from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
	const router = useRouter();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box display={{ xs: 'block', md: 'none' }}>
			<Stack direction='row' justifyContent='flex-end' p={2}>
				<Button
					id='basic-button'
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<Icon component={MenuIcon} sx={{ fontSize: 36 }} />
				</Button>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{ROUTE_LIST.map((route) => (
						<MenuItem key={route.path}>
							<Link key={route.path} href={route.path} passHref>
								<MuiLink
									className={clsx({ active: router.pathname === route.path })}
									sx={{ ml: 2 }}
									fontWeight='medium'
								>
									{route.label}
								</MuiLink>
							</Link>
						</MenuItem>
					))}
				</Menu>
			</Stack>
		</Box>
	);
}
