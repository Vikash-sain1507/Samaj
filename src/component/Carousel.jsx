// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { Box, Card, CardMedia } from "@mui/material";

// const images = [
//   "https://plus.unsplash.com/premium_photo-1682098120982-6d2bb64f64a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1679547202572-bb3a34c54130?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: true,
//   };

//   return (
//     <Box sx={{ maxWidth: "100%", margin: "auto", }}>
//       <Slider {...settings}>
//         {images.map((img, index) => (
//           <Card key={index}>
//             <CardMedia
//               component="img"
//               height="600"
//               image={img}
//               alt={`slide-${index}`}
//             />
//           </Card>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default Carousel;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";

const images = [
  "https://plus.unsplash.com/premium_photo-1682098120982-6d2bb64f64a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1679547202572-bb3a34c54130?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Carousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // true if width <= 600px

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <Box sx={{ maxWidth: "100%", margin: "auto", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Card key={index} sx={{ borderRadius: 0 }}>
            <CardMedia
              component="img"
              image={img}
              alt={`slide-${index}`}
              sx={{
                width: "100%",
                height: {
                  xs: 250, // height for extra small screens
                  sm: 300,
                  md: 500,
                  lg: 600,
                },
                objectFit: "cover",
              }}
            />
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
