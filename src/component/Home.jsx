// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Grid,
//   Box
// } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import StudentTypesChart from "./StudentTypesChart";
// import SchoolIcon from "@mui/icons-material/School";
// import TranslateIcon from "@mui/icons-material/Translate";
// import ComputerIcon from "@mui/icons-material/Computer";
// import CreateIcon from "@mui/icons-material/Create";





// const courses = [
//   { title: "English", image: "english.jpg", price: "₹10,999", discount: "₹12,999" },
//   { title: "Hindi", image: "hindi.jpg", price: "₹8,999", discount: "₹10,999" },
//   { title: "Computer", image: "computer.jpg", price: "₹12,999", discount: "₹14,999" },
//   { title: "English Writing", image: "writing.jpg", price: "₹9,999", discount: "₹11,999" }
// ];
// const statusData = [
//   {
//     label: " English",
//     count: 300,
//     icon: <TranslateIcon />, 
//     borderColor: "#1e40af"
//   },
//   {
//     label: " Hindi",
//     count: 150,
//     icon: <SchoolIcon />, 
//     borderColor: "#15803d"
//   },
//   {
//     label: "Computer",
//     count: 150,
//     icon: <ComputerIcon />, 
//     borderColor: "#ea580c"
//   },
//   {
//     label: "EG Writing",
//     count: 200,
//     icon: <CreateIcon />, 
//     borderColor: "#dc2626"
//   }
// ];
// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Header />
//       <Button
//         startIcon={<ArrowBackIcon />}
//         onClick={() => navigate(-1)}
//         sx={{ margin: 2 }}
//       >
//         Back
//       </Button>

//       <Box p={{ xs: 1, sm: 2, md: 3 }}>
//         <Typography
//           variant="h6"
//           fontWeight="bold"
//           gutterBottom
//           color="#0f172a"
//           sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
//         >
//           Welcome!
//         </Typography>

//         <Grid container spacing={{ xs: 1, sm: 2 }}>
//           {statusData.map((item, index) => (
//             <Grid item xs={3} sm={3} md={3} lg={3} key={index}>
//               <Card
//                 elevation={2}
//                 sx={{
//                   borderRadius: 2,
//                   textAlign: "center",
//                   height: "100%",
//                   padding: { xs: 1, sm: 2 },
//                   minHeight: { xs: 120, sm: 150 }
//                 }}
//               >
//                 <CardContent sx={{ p: "8px !important" }}>
//                   <Typography
//                     variant="caption"
//                     color="text.secondary"
//                     sx={{
//                       fontSize: { xs: "0.6rem", sm: "0.75rem" }
//                     }}
//                   >
//                     {item.label}
//                   </Typography>
//                   <Typography
//                     fontWeight="bold"
//                     sx={{
//                       fontSize: { xs: "0.95rem", sm: "1.25rem" },
//                       mt: 0.5
//                     }}
//                   >
//                     {item.count}
//                   </Typography>
//                   <Box
//                     sx={{
//                       mt: 1,
//                       borderRadius: "50%",
//                       border: `2px solid ${item.borderColor}`,
//                       width: { xs: 28, sm: 36 },
//                       height: { xs: 28, sm: 36 },
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       mx: "auto"
//                     }}
//                   >
//                     {React.cloneElement(item.icon, {
//                       sx: {
//                         fontSize: { xs: 16, sm: 20 },
//                         color: item.borderColor
//                       }
//                     })}
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//        <StudentTypesChart/>
//       <Grid container spacing={3} justifyContent="center" mt={5}>
//         {courses.map((course, index) => (
//           <Grid item key={index} xs={12} sm={6} md={3}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={course.image}
//                 alt={course.title}
//               />
//               <CardContent>
//                 <Typography variant="h6">{course.title}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <strike>{course.discount}</strike>{" "}
//                   <strong>{course.price}</strong>
//                 </Typography>
//                 <Button variant="contained" color="primary" fullWidth>
//                   Buy Now
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import StudentTypesChart from "./StudentTypesChart";
import SchoolIcon from "@mui/icons-material/School";
import TranslateIcon from "@mui/icons-material/Translate";
import ComputerIcon from "@mui/icons-material/Computer";
import CreateIcon from "@mui/icons-material/Create";



const courses = [
  { title: "English", image: "english.jpg", price: "₹10,999", discount: "₹12,999" },
  { title: "Hindi", image: "hindi.jpg", price: "₹8,999", discount: "₹10,999" },
  { title: "Computer", image: "computer.jpg", price: "₹12,999", discount: "₹14,999" },
  { title: "English Writing", image: "writing.jpg", price: "₹9,999", discount: "₹11,999" }
];

const statusData = [
  {
    label: "English",
    count: 300,
    icon: <TranslateIcon />,
    borderColor: "#1e40af"
  },
  {
    label: "Hindi",
    count: 150,
    icon: <SchoolIcon />,
    borderColor: "#15803d"
  },
  {
    label: "Computer",
    count: 150,
    icon: <ComputerIcon />,
    borderColor: "#ea580c"
  },
  {
    label: "EG Writing",
    count: 200,
    icon: <CreateIcon />,
    borderColor: "#dc2626"
  }
];

function Home() {
  const [profile, setProfile] = useState(null);

 useEffect(() => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    console.error('User ID not found in localStorage');
    return;
  }

  fetch(`http://localhost:3000/users/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      setProfile(data);
    })
    .catch((error) => {
      console.error('Failed to fetch profile:', error);
    });
}, []);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ margin: 2, color: "#9b51e0" }}
      >
        Back
      </Button>

      <Box p={{ xs: 1, sm: 2, md: 3 }}>
        <Typography
          display="flex"
          alignItems="center"
          variant="h6"
          fontWeight="bold"
          gutterBottom
          color="#0f172a"
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
        >
         <Box display="flex" alignItems="center" gap={1}>
            Welcome!
            <span style={{ color: "#9b51e0" }}>{profile?.name}</span>
          </Box>
        </Typography>


        {/* Status Grid */}
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
          {statusData.map((item, index) => (
            <Grid item xs={3} sm={3} md={3} lg={3} key={index}>
              <Card
                elevation={2}
                sx={{
                  borderRadius: 2,
                  textAlign: "center",
                  height: "100%",
                  padding: { xs: 1, sm: 2 },
                  minHeight: { xs: 120, sm: 150 }
                }}
              >
                <CardContent sx={{ p: "8px !important" }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.6rem", sm: "0.75rem" }
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.25rem" },
                      mt: 0.5
                    }}
                  >
                    {item.count}
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      borderRadius: "50%",
                      border: `2px solid ${item.borderColor}`,
                      width: { xs: 28, sm: 36 },
                      height: { xs: 28, sm: 36 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto"
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      sx: {
                        fontSize: { xs: 16, sm: 20 },
                        color: item.borderColor
                      }
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <StudentTypesChart />

      {/* Courses Grid */}
      <Grid container spacing={3} justifyContent="center" mt={5}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={6} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  <strike>{course.discount}</strike>{" "}
                  <strong>{course.price}</strong>
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;

