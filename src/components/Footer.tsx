// components/Footer.tsx
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        mt: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Frida Nord. All rights reserved.
      </Typography>
    </Box>
  );
}

