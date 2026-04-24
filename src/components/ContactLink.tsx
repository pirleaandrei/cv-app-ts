import { IconButton } from '@mui/material';
import type { ReactNode } from 'react';

type ContactLinkProps = {
  href: string;
  icon: ReactNode;
  external?: boolean;
};

export function ContactLink({ href, icon, external }: ContactLinkProps) {
  return (
    <IconButton
      variant="glass"
      size="small"
      href={href}
      target={external ? '_blank' : undefined}
    >
      {icon}
    </IconButton>
  );
}
