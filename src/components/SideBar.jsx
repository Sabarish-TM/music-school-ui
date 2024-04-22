import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 72; // Adjusted width for mini sidebar

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent">
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => navigate('/')}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ textAlign: 'center' }} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding onClick={() => navigate('/dashboard')}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ textAlign: 'center' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => navigate('/course')}>
          <ListItemButton>
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Music" sx={{ textAlign: 'center' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
