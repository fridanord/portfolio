// components/Menu.tsx
import { Box, Button } from '@mui/material';

export default function Menu() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        p: 2,
        backgroundColor: '#809076', 
      }}
    >
      {[
        { label: 'OM MIG', href: '#about' },
        { label: 'MINA FÄRDIGHETER', href: '#skills' },
        { label: 'PORTFOLIO', href: '#portfolio' },
        { label: 'KONTAKT', href: '#contact' },
      ].map((item) => (
        <Button
          key={item.label}
          href={item.href}
          variant="outlined"
          sx={{
            color: '#111A19',
            borderColor: '#111A19',
            fontFamily: '"Space Mono", monospace',
            fontWeight: 'bold',
            borderRadius: '12px',
            paddingX: 2,
            '&:hover': {
              backgroundColor: '#fdf4ce',
              borderColor: '#111A19',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}



