import { Box, Typography, Button, Avatar, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <Box sx={{ backgroundColor: '#809076', pb: 0 }}>
      <Box
        sx={{
          pt: 10,
          px: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          textAlign: { xs: 'center', md: 'left' },
          color: '#f2efccff',
        }}
      >
        <Avatar alt="Frida" src="/img2.jpg" sx={{ width: 240, height: 240 }} />

        <Box maxWidth="500px">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: '"Space Mono", monospace',
              color: '#f2efccff',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Hej! Mitt namn är Frida och jag studerar till{' '}
            <Box
              component="span"
              sx={{ fontStyle: 'italic', color: '#ffe570ff' }}
            >
              frontend utvecklare.
            </Box>
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mt: 2,
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#132011ff',
                fontFamily: '"Inter", sans-serif',
              }}
              href="/FridaNordCV.pdf"
              download
            >
              Ladda ner CV
            </Button>

            <IconButton
              href="https://linkedin.com/in/frida-nord-b29141346"
              target="_blank"
              rel="noopener"
              sx={{ color: '#fdf4ce' }}
            >
              <FaLinkedin size={28} />
            </IconButton>

            <IconButton
              href="https://github.com/fridanord"
              target="_blank"
              rel="noopener"
              sx={{ color: '#fdf4ce' }}
            >
              <FaGithub size={28} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Vågform */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ display: 'block', width: '100%', marginTop: '-1px' }}
      >
        <path
          fill="#e9ece1ef"
          fillOpacity="1"
          d="M0,96L34.3,122.7C68.6,149,137,203,206,240C274.3,277,343,299,411,272C480,245,549,171,617,154.7C685.7,139,754,181,823,165.3C891.4,149,960,75,1029,69.3C1097.1,64,1166,128,1234,160C1302.9,192,1371,192,1406,192L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
}


