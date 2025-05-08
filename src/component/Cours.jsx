import { Box, Chip } from "@mui/material";
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
        left: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        color: "black",
      }}
    >
      <ArrowBackIos fontSize="large" />
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
        right: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        color: "black",
      }}
    >
      <ArrowForwardIos fontSize="large" />
    </Box>
  );
};

const images = [
   "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/5494259/pexels-photo-5494259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/5530454/pexels-photo-5530454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/5494259/pexels-photo-5494259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/5530454/pexels-photo-5530454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        style={{
          color: "#9b51e0" ,
          textTransform: "uppercase",
          fontSize: "36px",
          textAlign: "center",
          fontWeight: "800",
          marginBottom: "25px",
          marginTop: "50px",
        }}
      >
        PREPARE WITH US
        <Box
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <Chip
            label="CAjgdsa"
            style={{
              padding: "30px",
              backgroundColor: "#9b51e0" ,
              color: "white",
            }}
          />
          <Chip
            label="EGhfkjashk"
            style={{
              padding: "30px",
              backgroundColor: "#9b51e0" ,
              color: "white",
            }}
          />
          <Chip
            label="ELksfdhkjs"
            style={{
              padding: "30px",
              backgroundColor: "#9b51e0" ,
              color: "white",
            }}
          />
        </Box>
      </Box>

      {/* Slider with images */}
      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 10, position: "relative" }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "10px" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Cours;
