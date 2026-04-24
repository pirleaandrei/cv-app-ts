import { Box } from '@mui/material';
import type { ReactNode } from 'react';

type TimelineItemProps = {
  isLast: boolean;
  children: ReactNode;
};

export function TimelineItem({ isLast, children }: TimelineItemProps) {
  return (
    <Box className={`timeline-item${isLast ? ' timeline-item--last' : ''}`}>
      <Box className="timeline-item-content">
        {children}
      </Box>
    </Box>
  );
}
