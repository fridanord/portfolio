// components/Contact.tsx
import { Box, Typography, Link } from '@mui/material';

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        px: 4,
        textAlign: 'center',
        backgroundColor: "#d3d8c5a7"
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'normal',fontFamily: '"Space Mono", monospace' }}>
        Kontakt
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Vill du samarbeta, ställa frågor eller bara säga hej? Hör av dig!
      </Typography>

      <Typography>
        📧{' '}
        <Link href="mailto:frieugenia2@gmail.com" underline="hover">
          frieugenia2@gmail.com
        </Link>
      </Typography>
      <Typography>
        🔗{' '}
        <Link href="https://www.linkedin.com/in/frida-nord-b29141346" target="_blank" underline="hover">
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
}
