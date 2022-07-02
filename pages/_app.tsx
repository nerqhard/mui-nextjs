import { AppPropsWithLayout } from '@/model';
import {createEmotionCache, theme} from '@/utils';
import {CacheProvider, EmotionCache} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {EmptyLayout} from 'components/layout';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


function MyApp(props: AppPropsWithLayout) {
	const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

	const Layout = Component.Layout ?? EmptyLayout;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
