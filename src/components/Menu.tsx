import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { label: 'OM MIG', href: '#about' },
  { label: 'MINA FÄRDIGHETER', href: '#skills' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'KONTAKT', href: '#contact' },
];

export default function Menu() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isMobile ? 'flex-end' : 'center',
        alignItems: 'center',
        p: 2,
        backgroundColor: '#809076',
      }}
    >
      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: '#111A19' }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 200, mt: 4 }} role="presentation" onClick={toggleDrawer(false)}>
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton component="a" href={item.href}>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontFamily: '"Space Mono", monospace',
                          fontWeight: 'bold',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        menuItems.map((item) => (
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
              px: 2,
              mx: 1,
              '&:hover': {
                backgroundColor: '#fdf4ce',
                borderColor: '#111A19',
              },
            }}
          >
            {item.label}
          </Button>
        ))
      )}
    </Box>
  );
}




