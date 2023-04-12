import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  Divider,
  List,
  Button,
  Drawer,
  Box
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

type Anchor = 'left';

export default function SideMenu() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ marginTop: 5 }}>
        {['Cadastrar Treino', 'Treino'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => { handleNavigatePage(index) }}>
              <ListItemIcon>
                {index % 2 === 0 ?
                  <AddCircleIcon sx={{ color: "#FF8D00" }} />
                  : <FitnessCenterIcon sx={{ color: "#FF8D00" }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const handleNavigatePage = (index: number) => {
    if (index === 0) {
      navigate("/createTraining");
    } else {
      navigate("/home");
    }
  }

  return (
    <div className='z-50 fixed top-0'>
      {(['left'] as const).map((anchor) => (
        <div key={anchor}>
          <Button
            sx={{ marginTop: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            {<MenuIcon fontSize="large" sx={{ color: "#FF8D00" }} />}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}
