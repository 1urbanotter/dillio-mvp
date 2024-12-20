import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box } from "@mui/material";
import { Home, Chat, Description } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <Home />, path: "/" },
    { text: "Chatbot", icon: <Chat />, path: "/chatbot" },
    { text: "Document Generator", icon: <Description />, path: "/document-generator" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{ inlineSize: 240, [`& .MuiDrawer-paper`]: { inlineSize: 240, boxSizing: "border-box" } }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">dill.io</Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;