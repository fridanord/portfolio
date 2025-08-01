import { Box, Typography } from '@mui/material';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaGitAlt,
  FaReact,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} color="#132011" /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} color="#132011" /> },
  { name: 'SASS', icon: <FaSass size={40} color="#132011" /> },
  { name: 'JavaScript', icon: <FaJs size={40} color="#132011" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#132011" /> },
  { name: 'React', icon: <FaReact size={40} color="#132011" /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={40} color="#132011" /> },
  { name: 'GIT, Github', icon: <FaGitAlt size={40} color="#132011" /> },
  { name: 'Figma', icon: <FaFigma size={40} color="#132011" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#132011" /> },
];

export default function Skills() {
  const row1 = skills.slice(0, 5);
  const row2 = skills.slice(5);

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        textAlign: 'center',
        backgroundColor: '#d3d8c5a7',
        color: '#132011ff',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 'normal',
          fontFamily: '"Space Mono", monospace',
        }}
      >
        Mina färdigheter
      </Typography>

      {[row1, row2].map((row, index) => (
        <Box
          key={index}
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {row.map((skill) => (
            <Box key={skill.name} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: 4,
                    cursor: 'pointer',
                  },
                  mx: 'auto',
                }}
              >
                {skill.icon}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}




