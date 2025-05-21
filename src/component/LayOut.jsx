import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const LayOut = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#fff" }}>
      {/* Heading */}
      <Typography variant="h4" color="#9b51e0" fontWeight="bold" textAlign="center" gutterBottom>
        What is SAMAJH?
      </Typography>
      <Typography variant="body1" textAlign="center" maxWidth="600px" mx="auto" mb={4}>
        SAMAJH is a platform that allows educators to create virtual classrooms that are just as effective as in-person classrooms. It includes all the tools you need for teaching and learning online.
      </Typography>

      {/* Two main images */}
      <Grid container spacing={4} justifyContent="center" mb={6}>
        <Grid item xs={12} md={4}>
          <Box component="img" src="https://media.gettyimages.com/id/1072470136/photo/students-learning-computer-programming-stock-image.jpg?s=612x612&w=gi&k=20&c=xWhUmbEVQbUgFL9aNCdMoLd9ccuPymC806jmAlX2QNU=" alt="Classroom 1" width="100%" borderRadius={2} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box component="img" src="https://www.shutterstock.com/image-photo/happy-smiling-student-teacher-education-600nw-2176731709.jpg" alt="Classroom 2" width="100%" borderRadius={2} />
        </Grid>
      </Grid>

      {/* Text + Image section */}
      <Grid container spacing={4} alignItems="center">
  <Grid item xs={12} md={6}>
    <Box sx={{ maxWidth: "480px", mx: "auto", textAlign: "center" }}>
      <Typography variant="h6" fontWeight="bold" color="#9b51e0" gutterBottom>
        Everything you can do in a physical classroom, you can do with SAMAJH
      </Typography>
      <Typography variant="body1" color="textSecondary">
        SAMAJH’s school management software helps traditional and online schools manage scheduling, attendance, payments, and more.
        All-in-one solution for modern education.
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} md={6}>
    <Box
      component="img"
      src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?cs=srgb&dl=pexels-olly-3762800.jpg&fm=jpg"
      alt="Classroom Activity"
      width="100%"
      borderRadius={2}
    />
  </Grid>
</Grid>

      {/* <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" color="#3EDBB6" gutterBottom>
            Everything you can do in a physical classroom, you can do with TOTC
          </Typography>
          <Typography variant="body1" color="textSecondary">
            TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments, and more.
            All-in-one solution for modern education.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="img" src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?cs=srgb&dl=pexels-olly-3762800.jpg&fm=jpg" alt="Classroom Activity" width="100%" borderRadius={2} />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default LayOut;
