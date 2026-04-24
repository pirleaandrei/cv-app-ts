import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';

type SectionIconProps = {
  gradient: string;
  icon: ReactNode;
};

export function SectionIcon({ gradient, icon }: SectionIconProps) {
  const theme = useTheme();
  const bg = theme.custom.gradients[gradient] || theme.custom.gradients.primary;

  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 2,
        background: bg,
        display: 'flex',
        color: '#fff',
      }}
    >
      {icon}
    </Box>
  );
}
