import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export let theme = createTheme({
	typography: {
		fontFamily: 'Heebo, sans-serif'
	},
	palette: {
		primary: {
			main: '#FF6464',
		},
		secondary: {
			main: '#00A8CC',
			light: '#EDF7FA'
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#21243D',
			secondary: '#00A8CC'
		}
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				maxWidthSm: {
					'@media (min-width: 600px)': {
						maxWidth: '680px'
					}
				},
				maxWidthMd: {
					'@media (min-width: 900px)': {
						maxWidth: '860px'
					}
				}
			},
			defaultProps: {
				maxWidth: 'md'
			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover, &.active': {
						color: '#FF6464'
					}
				}
			},
			defaultProps: {
				underline: 'none'
			}
		},
		MuiButton: {
			variants: [{
				props: {
					variant: 'contained',
					color: 'primary'
				},
				style: {
					color: 'white'
				}
			}],
		},
		MuiChip: {
			styleOverrides: {
				root: {
					paddingInline: 4
				}
			},
			variants: [{
				props: {
					color: 'secondary'
				},
				style: {
					backgroundColor: '#142850',
					color: 'white',
					fontSize: '16px'
				}
			}],
		}
	}
});

/** Responsive font size - Material Typography support */
theme = responsiveFontSizes(theme);

/** OR config */
// theme.typography.h3 = {
// 	// 1rem = 12px
// 	fontSize: '2rem',
// 	// Set fontSize when more than md screen
// 	[theme.breakpoints.up('md')]: {
// 		fontSize: '3rem'
// 	}
// }