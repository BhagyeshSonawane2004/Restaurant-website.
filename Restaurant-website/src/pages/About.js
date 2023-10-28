import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
         Welcome to My restaurant, where culinary excellence meets warm hospitality. Our journey began with a simple yet profound vision – to create a dining experience that tantalizes your taste buds, nourishes your soul, and leaves a lasting impression.My restaurant is the result of a passion for food, a love for creativity, and a commitment to delivering outstanding service. Established in 2022, our restaurant has been a cornerstone of the local culinary scene for 1 years. What started as a small, family-owned eatery has blossomed into a beloved establishment that celebrates the art of food and the joy of sharing it with others.
        </p>
        <br />
        <p>
         At My restaurant, we believe that every dish should be a work of art and every meal an experience. We source the finest, locally-sourced ingredients to craft our menu, which is an homage to both classic and innovative culinary traditions. Our chefs are culinary artists, dedicated to crafting each dish with precision and passion.

Thank you for choosing My Restaurant for your dining experience. We can't wait to welcome you, and we're excited to be a part of your culinary adventures.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
