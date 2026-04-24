import { Card, CardContent, Chip, Stack, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import { SectionIcon } from './SectionIcon';

type SkillsSectionProps = {
  skills: string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const theme = useTheme();
  const gradients = theme.custom.skillGradients;

  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
          <SectionIcon gradient="greenToCyan" icon={<CodeIcon />} />
          <Typography variant="h5">Skills</Typography>
        </Stack>
        <Box display="flex" flexWrap="wrap" gap={1.5}>
          {skills.map((skill, index) => (
            <Chip
              key={skill}
              variant="skill"
              label={skill}
              sx={{ background: gradients[index % gradients.length] }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
