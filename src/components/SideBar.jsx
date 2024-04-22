import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout'; // Import logout icon
import { useNavigate } from 'react-router-dom';

const drawerWidth = 110;
const iconSize = 30;

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

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledListItemText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));

export default function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login')
  };

  return (
    <Drawer variant="permanent">
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => navigate('/')}>
          <StyledListItemButton>
            <ListItemIcon>
              <HomeIcon sx={{ fontSize: 35, mb: 2, ml: 1 }} />
            </ListItemIcon>
          </StyledListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding onClick={() => navigate('/dashboard')}>
          <StyledListItemButton>
            <ListItemIcon>
              <DashboardOutlinedIcon sx={{ fontSize: iconSize, mb: 2, ml: 1, mt: 1 }} />
            </ListItemIcon>
            <StyledListItemText sx={{ fontSize: 15 }}>Dashboard</StyledListItemText>
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => navigate('/course')}>
          <StyledListItemButton>
            <ListItemIcon>
              <QueueMusicIcon sx={{ fontSize: iconSize, mb: 1, ml: 1, mt: 1 }} />
            </ListItemIcon>
            <StyledListItemText sx={{ fontSize: 15 }}>Course</StyledListItemText>
          </StyledListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List sx={{ marginTop: 'auto' }}>
        <ListItem disablePadding onClick={handleLogout}>
          <StyledListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ fontSize: iconSize, mb: 1, ml: 1 }} />
            </ListItemIcon>
            <StyledListItemText sx={{ fontSize: 15 }}>Logout</StyledListItemText>
          </StyledListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
