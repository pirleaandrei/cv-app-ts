import React, { useState } from 'react';
import { Box, Card, CardContent, Pagination, Stack, Typography, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { SectionIcon } from './SectionIcon';
import { TimelineItem } from './TimelineItem';
import type { Experience } from '../types';

const ITEMS_PER_PAGE = 3;

type ExperienceSectionProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(experience.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = experience.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
          <SectionIcon gradient="primaryToPink" icon={<WorkIcon />} />
          <Typography variant="h5">Work Experience</Typography>
        </Stack>

        <Box sx={{ minHeight: 670 }}>
          <Stack spacing={0}>
            {currentItems.map((item, index) => (
              <TimelineItem key={`${item.company}-${item.period}`} isLast={index === currentItems.length - 1}>
                <Typography variant="h6">{item.role}</Typography>
                <Typography variant="subtitle1" className="gradient-text">
                  {item.company}
                </Typography>
                <Chip
                  variant="date"
                  size="small"
                  icon={<CalendarTodayIcon sx={{ fontSize: 14, color: 'inherit !important' }} />}
                  label={item.period}
                />
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </TimelineItem>
            ))}
          </Stack>
        </Box>

        {totalPages > 1 && (
          <Stack alignItems="center" mt={4}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_e, value) => setPage(value)}
            />
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
