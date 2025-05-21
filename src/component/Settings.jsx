// // 

// // File: Settings.js

// import React, { useMemo, useState } from 'react';
// import { Box, Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import Header from './Header'; // Ensure you have a Header component
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useNavigate } from 'react-router-dom';

// const Settings = () => {
//   const navigate = useNavigate();
//   const [mode, setMode] = useState('light');

//   // Create the theme dynamically based on the current mode
//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode: mode,
//         },
//         components: {
//           MuiCssBaseline: {
//             styleOverrides: {
//               body: {
//                 transition: 'all 0.5s ease', // Smooth transition when changing modes
//               },
//             },
//           },
//         },
//       }),
//     [mode]
//   );

//   // Toggle between light and dark mode
//   const toggleTheme = () => {
//     setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline /> {/* Global CSS reset */}
//       <Box>
//         <Header /> {/* Ensure you have the Header component implemented */}
        
//         {/* Back Button */}
//         <Button
//           startIcon={<ArrowBackIcon />}
//           onClick={() => navigate(-1)}  // Go to the previous page
//           sx={{ m: 2 }}
//           variant="contained"
//         >
//           Back
//         </Button>

//         {/* Centered content */}
//         <Box
//           sx={{
//             height: '80vh',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             bgcolor: 'background.default',
//             color: 'text.primary',
//             transition: 'all 0.5s ease',
//           }}
//         >
//           {/* Theme toggle button */}
//           <Button
//             onClick={toggleTheme}
//             variant="outlined"
//             sx={{
//               px: 4,
//               py: 2,
//               fontSize: '1rem',
//             }}
//           >
//             {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
//           </Button>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default Settings;


import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import ImageIcon from "@mui/icons-material/Image";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const API_KEY = "sk-..."; // Replace with your real key for testing only

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null); // base64 image
  const [recording, setRecording] = useState(false);
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!input.trim() && !image) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const payload = {
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: image
              ? [
                  { type: "text", text: input || "Analyze the image." },
                  {
                    type: "image_url",
                    image_url: {
                      url: image,
                    },
                  },
                ]
              : [{ type: "text", text: input }],
          },
        ],
        max_tokens: 1000,
      };

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [...prev, { role: "bot", text: "Error: " + data.error.message }]);
      } else {
        const reply = data.choices[0].message.content;
        setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", text: "Error fetching response." }]);
    } finally {
      setLoading(false);
      setImage(null); // clear after sending
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleMicClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setRecording(true);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + " " + transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.onend = () => {
      setRecording(false);
    };
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 format
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <Header />
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ margin: 2, color: "#9b51e0" }}
      >
        Back
      </Button>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography color="#9b51e0" variant="h4" align="center" gutterBottom>
          Chat with AI
        </Typography>

        <Paper elevation={3} sx={{ p: 2, minHeight: 400, maxHeight: 500, overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={msg.role === "user" ? "flex-end" : "flex-start"}
              mb={1}
            >
              <Box
                sx={{
                  backgroundColor: msg.role === "user" ? "#9b51e0" : "#eeeeee",
                  color: msg.role === "user" ? "#fff" : "#000",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: "80%",
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
              </Box>
            </Box>
          ))}

          {loading && (
            <Box display="flex" justifyContent="flex-start" mt={1}>
              <CircularProgress size={20} />
              <Typography sx={{ ml: 1 }}>Thinking...</Typography>
            </Box>
          )}

          {image && (
            <Box mt={2}>
              <Typography variant="subtitle2">Image Preview:</Typography>
              <img src={image} alt="Uploaded" style={{ maxWidth: "100%", borderRadius: 8 }} />
            </Box>
          )}
        </Paper>

        <Box display="flex" mt={2} gap={1} alignItems="center">
          <TextField
            fullWidth
            label="Ask something..."
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnter}
            sx={{
              "& label.Mui-focused": {
                color: "#9b51e0",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#9b51e0",
                },
                "&:hover fieldset": {
                  borderColor: "#9b51e0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#9b51e0",
                },
              },
            }}
          />
          <input
            accept="image/*"
            type="file"
            id="upload-photo"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <label htmlFor="upload-photo">
            <IconButton component="span" sx={{ color: "#9b51e0" }}>
              <ImageIcon />
            </IconButton>
          </label>
          <IconButton
            onClick={handleMicClick}
            sx={{ color: recording ? "error.main" : "#9b51e0" }}
          >
            <MicIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#9b51e0", "&:hover": { backgroundColor: "#873dcf" } }}
            onClick={handleSend}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Chat;
