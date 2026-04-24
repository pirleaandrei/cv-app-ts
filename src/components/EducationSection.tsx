import { Card, CardContent, Stack, Typography, Chip, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { SectionIcon } from './SectionIcon';
import type { Education } from '../types';

type EducationSectionProps = {
  education: Education[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
          <SectionIcon gradient="purpleToCyan" icon={<SchoolIcon />} />
          <Typography variant="h5">Education</Typography>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {education.map((item) => (
            <Paper key={`${item.institution}-${item.period}`} variant="glass" elevation={0}>
              <Typography variant="h6">{item.degree}</Typography>
              <Typography variant="subtitle2" className="gradient-text-cyan">
                {item.institution}
              </Typography>
              <Chip
                variant="date"
                size="small"
                icon={<CalendarTodayIcon sx={{ fontSize: 14, color: 'white !important' }} />}
                label={item.period}
              />
            </Paper>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
