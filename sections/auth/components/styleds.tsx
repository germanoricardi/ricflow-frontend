'use client';

import { Box, Card, styled } from "@mui/material";

export const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100dvw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
}));

export const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  margin: `0 ${theme.spacing(2)}`,
  width: `${theme.breakpoints.values.sm}px`,
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%',
  },
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
}));