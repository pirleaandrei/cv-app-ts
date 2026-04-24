import { Card, CardContent, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { SectionIcon } from './SectionIcon';
import PersonIcon from '@mui/icons-material/Person';

type AboutSectionProps = {
  about: string;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1.5} mb={2.5}>
          <SectionIcon gradient="primary" icon={<PersonIcon />} />
          <Typography variant="h5">About Me</Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary">
          {about}
        </Typography>
      </CardContent>
    </Card>
  );
}
