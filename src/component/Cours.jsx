import { Box, Chip, Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "-20px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        color: "black",
      }}
    >
      <ArrowBackIos fontSize="medium" />
    </Box>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "-20px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        color: "black",
      }}
    >
      <ArrowForwardIos fontSize="medium" />
    </Box>
  );
};

const images = [
  "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5494259/pexels-photo-5494259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5530454/pexels-photo-5530454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5494259/pexels-photo-5494259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5530454/pexels-photo-5530454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function Cours() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box>
      <Box
        sx={{
          color: "#9b851e0",
          textTransform: "uppercase",
          fontSize: { xs: "24px", sm: "30px", md: "36px" },
          textAlign: "center",
          fontWeight: "800",
          mb: 3,
          mt: 6,
        }}
      >
        PREPARE WITH US

        {/* Chips in 2 per row on small screens */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4, px: 4 }}
        >
          {["English", "Hindi", "Computer", "English"].map((label, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Chip
                label={label}
                sx={{
                  width: "100%",
                  py: 2,
                  backgroundColor: "#9b51e0",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1rem",
                  height: "70px",
                  "&:hover": {
                    backgroundColor: "#ffffff", // Change background on hover
                    color: "#9b51e0", // Change text color on hover
                    cursor: "pointer",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Responsive Slider */}
      <Box sx={{ maxWidth: "89%", mx: "auto", mt: 8, position: "relative", px: 2 }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Cours;

// import {
//   Box,
//   Chip,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// // Custom Previous Arrow
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <Box
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         left: "-20px",
//         top: "50%",
//         transform: "translateY(-50%)",
//         cursor: "pointer",
//         zIndex: 1,
//         color: "black",
//       }}
//     >
//       <ArrowBackIos fontSize="medium" />
//     </Box>
//   );
// };

// // Custom Next Arrow
// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <Box
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         right: "-20px",
//         top: "50%",
//         transform: "translateY(-50%)",
//         cursor: "pointer",
//         zIndex: 1,
//         color: "black",
//       }}
//     >
//       <ArrowForwardIos fontSize="medium" />
//     </Box>
//   );
// };

// const images = [
//   "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/5494259/pexels-photo-5494259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/5530454/pexels-photo-5530454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];

// const subjectTopics = {
//   Hindi: ["व्याकरण", "साहित्य", "गद्यांश", "पत्र लेखन"],
//   English: ["Grammar", "Essay Writing", "Comprehension", "Vocabulary"],
//   Computer: ["MS Office", "Typing", "Basics of Hardware", "Internet"],
// };

// function Cours() {
//   const [open, setOpen] = useState(false);
//   const [selectedSubject, setSelectedSubject] = useState("");

//   const handleChipClick = (subject) => {
//     setSelectedSubject(subject);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedSubject("");
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <Box>
//       <Box
//         sx={{
//           color: "#9b851e0",
//           textTransform: "uppercase",
//           fontSize: { xs: "24px", sm: "30px", md: "36px" },
//           textAlign: "center",
//           fontWeight: "800",
//           mb: 3,
//           mt: 6,
//         }}
//       >
//         PREPARE WITH US
//         <Grid container spacing={2} justifyContent="center" sx={{ mt: 4, px: 4 }}>
//           {["English", "Hindi", "Computer"].map((label, index) => (
//             <Grid item xs={6} sm={3} key={index}>
//               <Chip
//                 label={label}
//                 onClick={() => handleChipClick(label)}
//                 sx={{
//                   width: "100%",
//                   py: 2,
//                   backgroundColor: "#9b51e0",
//                   color: "white",
//                   fontWeight: 600,
//                   fontSize: "1rem",
//                   height: "70px",
//                   "&:hover": {
//                     backgroundColor: "#ffffff",
//                     color: "#9b51e0",
//                     cursor: "pointer",
//                   },
//                 }}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Box sx={{ maxWidth: "89%", mx: "auto", mt: 8, position: "relative", px: 2 }}>
//         <Slider {...settings}>
//           {images.map((src, index) => (
//             <Box key={index} sx={{ textAlign: "center" }}>
//               <img
//                 src={src}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   maxHeight: "300px",
//                   objectFit: "cover",
//                   borderRadius: "10px",
//                 }}
//               />
//             </Box>
//           ))}
//         </Slider>
//       </Box>

//       {/* Dialog Popup */}
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//         <DialogTitle>{selectedSubject} Topics</DialogTitle>
//         <DialogContent>
//           <List>
//             {subjectTopics[selectedSubject]?.map((topic, index) => (
//               <ListItem key={index}>
//                 <ListItemText primary={topic} />
//               </ListItem>
//             ))}
//           </List>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// }

// export default Cours;
