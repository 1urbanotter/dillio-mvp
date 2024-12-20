import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Chatbot = () => {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <Box sx={{ maxinlineSize: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        AI Legal Chatbot
      </Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: 2, minblockSize: 300 }}>
        {messages.map((msg, index) => (
          <Typography key={index} gutterBottom>
            <strong>{msg.user}:</strong> {msg.text}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSend} variant="contained" color="primary" sx={{ ml: 1 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;