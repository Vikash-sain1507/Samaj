// import React, { useState } from 'react';
// import {
//     Button,
// } from '@mui/material';
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useNavigate } from "react-router-dom";
// import Header from './Header';

// function Blog() {
//     const navigate = useNavigate();


//     return (
//         <div>
//             <Header />
//             <Button
//                 startIcon={<ArrowBackIcon />}
//                 onClick={() => navigate(-1)}
//                 sx={{ margin: 2 }}
//             >
//                 Back
//             </Button>


//         </div>
//     );
// }

// export default Blog;

import React from 'react';
import {
    Button,
    Typography,
    Box,
} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Blog() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(-1)}
                sx={{ margin: 2 }}
            >
                Back
            </Button>

            <Box sx={{ padding: 3, backgroundColor: '#f1f1f1', borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                    📝 How to Improve Your English Speaking, Writing, and Computer Skills
                </Typography>

                <Typography paragraph>
                    In today's globalized and digital world, being fluent in <strong>English</strong> and comfortable with <strong>technology</strong> is essential for personal and professional growth. Here's how you can improve your <strong>English speaking</strong>, <strong>English writing</strong>, and <strong>computer skills</strong> effectively:
                </Typography>

                <Typography variant="h5" gutterBottom>📣 English Speaking Skills</Typography>
                <ul>
                    <li>Practice daily with friends, family, or in front of a mirror.</li>
                    <li>Watch English movies, YouTube videos, or listen to English podcasts.</li>
                    <li>Join local or online English conversation clubs to gain confidence.</li>
                </ul>

                <Typography variant="h5" gutterBottom>✍️ English Writing Skills</Typography>
                <ul>
                    <li>Write a daily journal to express your thoughts in English.</li>
                    <li>Use tools like Grammarly to correct and learn from your mistakes.</li>
                    <li>Read English blogs or articles and try writing similar content.</li>
                </ul>

                <Typography variant="h5" gutterBottom>💻 Computer Skills</Typography>
                <ul>
                    <li>Learn the basics of Microsoft Office or Google Docs/Sheets.</li>
                    <li>Practice typing using websites like TypingClub or Keybr.</li>
                    <li>Take free online courses on computer skills from platforms like Coursera or Khan Academy.</li>
                </ul>

                <Typography paragraph>
                    Improving these three areas will boost your confidence and open up many opportunities in education and career. Start small, be consistent, and enjoy the journey of learning!
                </Typography>
            </Box>
        </div>
    );
}

export default Blog;
