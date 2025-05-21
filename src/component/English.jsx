

import React, { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress
} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';
import Header from './Header';

const videosData = [
  {
    title: "English Chapter 1 - Intro",
    duration: "10 mins",
    progress: 0,
    url: "https://youtu.be/olu0ayE7-h8"
  },
  {
    title: "English Chapter 2 - Grammar",
    duration: "25 mins",
    progress: 0,
    url: "https://www.youtube./watch?v=jNQXAC9IVRw"
  },
  {
    title: "English Chapter 3 - Essay",
    duration: "15 mins",
    progress: 0,
    url: "https://www.youtube.com/watch?v=ScMzIvxBSi4"
  },
  {
    title: "English Chapter 4 - Practice",
    duration: "20 mins",
    progress: 0,
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ"
  }
];

function English() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = videosData.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <Box px={2} py={1}>
        {/* Search Input */}
        <TextField
          fullWidth
          variant="outlined"
          label="Search Video"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* Selected Video Preview Card */}
        {selectedVideo && (
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {selectedVideo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: {selectedVideo.duration}
              </Typography>
              <Box mt={2}>
                <ReactPlayer url={selectedVideo.url} controls width="100%" />
              </Box>
              <Box mt={2}>
                <LinearProgress variant="determinate" value={selectedVideo.progress} />
                <Typography variant="caption">{selectedVideo.progress}% completed</Typography>
              </Box>
            </CardContent>
          </Card>
        )}

        {/* Video Playlist */}
        <Box
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              lg: 'grid',
            },
            flexDirection: {
              xs: 'column',
              sm: 'column',
            },
            gridTemplateColumns: {
              lg: 'repeat(2, 1fr)',
            },
            gap: {
              lg: '20px',
            },
          }}>
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video, index) => (
              <Card
                key={index}
                sx={{ mb: 2, cursor: 'pointer' }}
                onClick={() => setSelectedVideo(video)}
              >
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {video.duration}
                  </Typography>
                  <Box mt={1}>
                    <LinearProgress variant="determinate" value={video.progress} />
                    <Typography variant="caption" color="text.secondary">
                      {video.progress}%
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No videos found.
            </Typography>
          )}
        </Box>
      </Box>
    </div >
  );
}

export default English;
