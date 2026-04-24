import { Container, Alert } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useCvData } from './hooks/useCvData';
import { AboutSection } from './components/AboutSection';
import { Header } from './components/Header';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';


export function App() {
  const { data, isLoading, isError } = useCvData();

  if (isLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Skeleton variant="rounded" height={180} sx={{ mb: 3 }} />
        <Skeleton variant="rounded" height={100} sx={{ mb: 3 }} />
        <Skeleton variant="rounded" height={300} sx={{ mb: 3 }} />
        <Skeleton variant="rounded" height={120} sx={{ mb: 3 }} />
        <Skeleton variant="rounded" height={80} />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Alert severity="error">Failed to load CV data</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Header name={data!.name} title={data!.title} avatar={data!.avatar} contact={data!.contact} />
      <AboutSection about={data!.about} />
      <ExperienceSection experience={data!.experience} />
      <EducationSection education={data!.education} />
      <SkillsSection skills={data!.skills} />
    </Container>
  );
}
