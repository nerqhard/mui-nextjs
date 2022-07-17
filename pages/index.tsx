import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/system';
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { Seo } from '@/components/common';

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Seo data={{
				title: 'Home | MUI NextJS | NQH',
				description: 'Build a profile website using NextJS, ReactJS and Material UI',
				url: 'https://mui-nqh.vercel.app/',
				thumbnailUrl: 'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1658062098/mui-nextjs/img5_qzo3bm.jpg',
			}} />
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	);
};

Home.Layout = MainLayout;

export default Home;
