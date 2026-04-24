import { createTheme } from '@mui/material/styles';

// ─── Augment MUI theme to include custom values ───
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      gradients: Record<string, string>;
      skillGradients: string[];
    };
  }
  interface ThemeOptions {
    custom?: {
      gradients?: Record<string, string>;
      skillGradients?: string[];
    };
  }
}

// ─── Augment component prop variants ───
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    skill: true;
    date: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    gradient: true;
    glass: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'glass';
  }
}

const theme = createTheme({
  // ─── Custom values (accessible via theme.custom in styled/sx) ───
  custom: {
    gradients: {
      primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #ec4899 100%)',
      primaryToPink: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      purpleToCyan: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      greenToCyan: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      textHighlight: 'linear-gradient(135deg, #818cf8, #f472b6)',
      textCyan: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      page: 'linear-gradient(180deg, #0f172a 0%, #1a1f3a 50%, #0f172a 100%)',
    },
    skillGradients: [
      'linear-gradient(135deg, #6366f1, #8b5cf6)',
      'linear-gradient(135deg, #ec4899, #f472b6)',
      'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      'linear-gradient(135deg, #f59e0b, #f97316)',
      'linear-gradient(135deg, #10b981, #06b6d4)',
      'linear-gradient(135deg, #6366f1, #ec4899)',
    ],
  },

  // ─── Palette ───
  palette: {
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },

  // ─── Typography ───
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: { fontWeight: 800, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.9, fontSize: '1.05rem' },
    body2: { lineHeight: 1.7 },
  },

  // ─── Shape ───
  shape: { borderRadius: 16 },

  // ─── Component overrides & variants ───
  components: {

    // --- CssBaseline: page-level background glow ---
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #0f172a 0%, #1a1f3a 50%, #0f172a 100%)',
          '&::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            background:
              'radial-gradient(ellipse at 20% 0%, rgba(99,102,241,0.08) 0%, transparent 50%), ' +
              'radial-gradient(ellipse at 80% 100%, rgba(236,72,153,0.06) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        },
        '.timeline-item': {
          position: 'relative',
          paddingLeft: 32,
          paddingBottom: 32,
          '&--last': {
            paddingBottom: 0,
            '&::before': { backgroundColor: 'transparent' },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 7,
            top: 8,
            bottom: 0,
            width: 2,
            backgroundColor: 'rgba(99,102,241,0.2)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 2,
            top: 6,
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            boxShadow: '0 0 0 4px rgba(99,102,241,0.15)',
          },
        },
        '.timeline-item-content': {
          padding: 20,
          borderRadius: 24,
          backgroundColor: 'rgba(99,102,241,0.06)',
          border: '1px solid rgba(99,102,241,0.1)',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(99,102,241,0.1)',
            borderColor: 'rgba(99,102,241,0.2)',
          },
          '& .gradient-text': {
            fontWeight: 600,
            background: 'linear-gradient(135deg, #818cf8, #f472b6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
      },
    },

    // --- Card: default section card + "gradient" variant for the header ---
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(99, 102, 241, 0.12)',
          marginBottom: 32,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(99, 102, 241, 0.15)',
            borderColor: 'rgba(99, 102, 241, 0.3)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #ec4899 100%)',
            border: 'none',
            '&:hover': {
              transform: 'none',
              boxShadow: 'none',
            },
          },
        },
      ],
    },

    // --- CardContent: comfortable padding ---
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 32,
          '&:last-child': { paddingBottom: 32 },
        },
      },
    },

    // --- Avatar: large with border glow ---
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 140,
          height: 140,
          border: '4px solid rgba(255,255,255,0.3)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        },
      },
    },

    // --- IconButton: "glass" variant for header contact icons ---
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'glass' },
          style: {
            color: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: '#fff',
            },
          },
        },
      ],
    },

    // --- Chip: "skill" variant (colorful) + "date" variant (subtle) ---
    MuiChip: {
      variants: [
        {
          props: { variant: 'skill' },
          style: {
            fontWeight: 600,
            fontSize: '0.85rem',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 4,
            paddingRight: 4,
            color: '#fff',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
            },
          },
        },
        {
          props: { variant: 'date' },
          style: {
            backgroundColor: 'rgba(99,102,241,0.1)',
            color: '#94a3b8',
            border: 'none',
            fontSize: '0.8rem',
          },
        },
      ],
    },

    // --- Paper: "glass" variant for education/glass boxes ---
    MuiPaper: {
      variants: [
        {
          props: { variant: 'glass' },
          style: {
            flex: 1,
            padding: 20,
            borderRadius: 24,
            backgroundColor: 'rgba(139,92,246,0.06)',
            border: '1px solid rgba(139,92,246,0.12)',
            transition: 'all 0.2s ease',
            backgroundImage: 'none',
            '&:hover': {
              backgroundColor: 'rgba(139,92,246,0.1)',
              borderColor: 'rgba(139,92,246,0.25)',
            },
            '& .gradient-text-cyan': {
              fontWeight: 600,
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
          },
        },
      ],
    },

    // --- Pagination: gradient selected state ---
    MuiPagination: {
      defaultProps: { variant: 'outlined', size: 'large', color: 'primary' },
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            color: '#94a3b8',
            borderColor: 'rgba(99, 102, 241, 0.3)',
            '&.Mui-selected': {
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              color: '#fff',
              borderColor: 'transparent',
            },
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
            },
          },
        },
      },
    },
  },
});

export default theme;
