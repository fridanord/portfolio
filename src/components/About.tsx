// components/About.tsx
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 4,
        background: '#d3d8c5a7',
        
      }}
    >
      <Box
        sx={{
          maxWidth: '800px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'normal',
            fontFamily: '"Space Mono", monospace',
            color: '#111A19', // valfri rubrikfärg
          }}
        >
          Om mig
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#111A19',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Jag heter Frida, 29 och är en frontenddeveloper student som gillar att kombinera kod med design. Mitt fokus ligger på att skapa tydliga och tillgängliga gränssnitt – både snygga och användarvänliga.
  
  Jag har erfarenhet av moderna verktyg som <strong>React</strong>, <strong>TypeScript</strong> och <strong>Material UI</strong>, och brinner för att lära mig nya saker inom både utveckling och <strong>UX/UI</strong>.
  <br /><br />
  Jag tycker det är viktigt att bygga produkter som inte bara fungerar – utan känns. Jag är noggrann med detaljer, gillar att tänka komponentbaserat och ser samarbete som en självklar del av utvecklingsprocessen.
  
  Under utbildningen har jag genomfört flera projekt i team där vi använt <strong>Git</strong>, <strong>Agil metodik</strong> och <strong>Figma</strong> för design och prototypning.
  <br /><br />
  Just nu letar jag efter en praktikplats eller arbetsplats där jag får växa som utvecklare, bidra med mitt driv – och samtidigt lära mig av er!
        </Typography>
      </Box>
    </Box>
  );
}

