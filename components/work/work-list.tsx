import { Work } from '@/models';
import { Box, Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { WorkCard } from './work-card';

export interface WorkListProps {
	workList: Work[];
	isPage?: boolean;
}

export function WorkList({ workList, isPage }: WorkListProps) {
	if (workList.length === 0) return null;

	return (
		<Box>
			{workList.map((work) => (
				<Fragment key={work.id}>
					<WorkCard work={work} />
					<Divider sx={{ mt: isPage ? 4 : 2, mb: 4 }} />
				</Fragment>
			))}
		</Box>
	);
}
