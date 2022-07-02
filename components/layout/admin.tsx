import {LayoutProps} from '@/model';
import Link from 'next/link';
import * as React from 'react';

export function Admin({children}: LayoutProps) {
	return (
		<div>
			<h1>Admin Layout</h1>

			<Link href={'./'}>
				<a>Home</a>
			</Link>

			<Link href={'./about'}>
				<a>About</a>
			</Link>
			<div>{children}</div>
		</div>
	);
}
