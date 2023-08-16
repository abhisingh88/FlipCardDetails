import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import fetchFunc from "../API";

function DetailedCard(params) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      setIsFlipped(!prev);
    });
  };
  return (
    <>
      <Box className="container" sx={{}} onClick={handleFlip}>
        <Card className={`cardContainer" + ${isFlipped ? " flipped" : ""}`}>
          <Box className="front">
            <CardMedia
              component="img"
              height={210}
              width={210}
              image="https://api.slingacademy.com/public/sample-photos/69.jpeg"
              alt="green iguana"
            />
          </Box>
          <Box className="back">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Be trade person any each tax
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Serve study keep population experience director official own
                natural together check many always quickly up difference half
                try.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default DetailedCard;
