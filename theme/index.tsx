'use client';

import { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, ThemeOptions, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// system
import { palette } from './pallete';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {

  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette('dark'),
      },
      shape: { borderRadius: 8 },
    }), []
  );

  const theme = createTheme(memoizedValue as ThemeOptions);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}