import { NextPageWithLayout } from '@/model';
import { Box } from '@mui/system';
import { HeroSection } from 'components/home';
import { MainLayout } from 'components/layout';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
		</Box>
	);
};

Home.Layout = MainLayout;

export default Home;
