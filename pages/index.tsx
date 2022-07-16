import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/system';
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { Seo } from '@/components/common';

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Seo data={{
				title: 'MaterialUI NextJS | NQH',
				description: 'Build a profile website using NextJS, ReactJS and Material UI',
				url: 'https://mui-nqh.vercel.app/',
				thumbnailUrl: 'https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657998466/mui-nextjs/43BE3FAA-7F2F-4D0D-A5CB-FC86D2CAB471_1_105_c_m062du.jpg',
			}} />
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	);
};

Home.Layout = MainLayout;

export default Home;
