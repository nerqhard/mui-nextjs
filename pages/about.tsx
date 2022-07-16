import { NextPageWithLayout } from '@/models';
import { MainLayout } from '@/components/layout';
import React from 'react';

type Props = {};

const AboutPage: NextPageWithLayout = (props: Props) => {
	return <h1>About Page</h1>;
};

AboutPage.Layout = MainLayout;
export default AboutPage;
