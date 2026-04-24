import { Avatar, Box, Card, CardContent, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactLink } from './ContactLink';
import type { Contact } from '../types';

type HeaderProps = {
  name: string;
  title: string;
  avatar: string;
  contact: Contact;
};

export function Header({ name, title, avatar, contact }: HeaderProps) {
  return (
    <Card variant="gradient">
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
          <Avatar src={avatar} alt={name} />
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flex: 1 }}>
            <Typography variant="h3" color="white" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h5" color="rgba(255,255,255,0.85)" gutterBottom>
              {title}
            </Typography>
            <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              {contact.location && (
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <LocationOnIcon fontSize="small" sx={{ color: 'rgba(255,255,255,0.7)' }} />
                  <Typography variant="body2" color="rgba(255,255,255,0.8)">
                    {contact.location}
                  </Typography>
                </Stack>
              )}
              {contact.email && <ContactLink href={`mailto:${contact.email}`} icon={<EmailIcon fontSize="small" />} />}
              {contact.phone && <ContactLink href={`tel:${contact.phone}`} icon={<PhoneIcon fontSize="small" />} />}
              {contact.linkedin && <ContactLink href={contact.linkedin} icon={<LinkedInIcon fontSize="small" />} external />}
              {contact.github && <ContactLink href={contact.github} icon={<GitHubIcon fontSize="small" />} external />}
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
