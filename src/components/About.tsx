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
          
          Jag heter Frida, 29 år, och studerar till frontendutvecklare på Medieinstitutet i Stockholm.
          Jag gillar att kombinera kod och design, och brinner för att skapa tydliga, responsiva och tillgängliga gränssnitt – gärna med en visuell och användarvänlig form.<br /><br />
          Under utbildningen har jag arbetat i agila team och byggt webbapplikationer med <strong>React</strong>, <strong>TypeScript</strong> och <strong>REST API:er</strong>.
          Vi har också jobbat med <strong>UX/UI-design</strong> i <strong>Figma</strong>, med fokus på användarupplevelse och tillgänglighet.<br /><br />
          Just nu söker jag en <strong>LIA-plats</strong> (praktik) under hösten 2025 där jag får utvecklas, bidra till riktiga projekt och bli en del av ett engagerat team.
        </Typography>
      </Box>
    </Box>
  );
}

