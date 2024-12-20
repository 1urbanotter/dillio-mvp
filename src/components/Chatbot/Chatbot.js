import React, { useState } from "react";
import { Box, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Mock API response for now
    const userMessage = { text: input, sender: "user" };
    const botResponse = { text: "This is a mock response for your query.", sender: "bot" };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <List sx={{ maxblockSsize: "70vh", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={msg.text}
              sx={{
                textAlign: msg.sender === "user" ? "right" : "left",
                color: msg.sender === "user" ? "blue" : "green",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", marginInsetBlockStart: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <Button variant="contained" onClick={handleSend} sx={{ marginInsetInlineStart: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;