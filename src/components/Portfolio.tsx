// components/Portfolio.tsx
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const projects = [
    {
    title: 'Todo lista - applikation',
    image: '/todo.png',
    description: 'En Todo lista – byggd i React och TypeScript.',
    link: 'https://todo-list-fridanord.netlify.app/',
  },
  {
    title: 'Väderkollen – Väderapplikation',
    image: '/vaderkollen.png',
    description: 'En väderapplikation skapad i React, TS och Material UI.',
    link: 'https://github.com/fridanord/vaderkollen',
  },
  {
    title: 'ArtloLu – konstforum',
    image: '/artlolu2.png', // Byt ut till riktiga bilder
    description: '(PÅGÅENDE) Ett forum och community för konstnärer, byggt med React, Node.js, MongoDB.',
    link: '#',
  },
  
];

export default function Portfolio() {
  return (
    <Box
      id="portfolio"
      sx={{
        py: 8,
        px: 4,
        textAlign: 'center',
        backgroundColor: '#d3d8c5a7',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'normal',fontFamily: '"Space Mono", monospace' }}>
        Portfolio
      </Typography>

      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {projects.map((project) => (
          <Card key={project.title} sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="180"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.link} target="_blank">
                Se projekt
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
