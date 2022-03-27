import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BookCard = ({
  ImageURL,
  Title,
  Author,
  Recommendation,
  PurchaseLink,
}) => {

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="image" height="200" image={ImageURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="h6">By: {Author}</Typography>
          
          
            <Typography variant="paragraph" color="text.secondary">
              {Recommendation}
            </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={PurchaseLink}>
            Buy From Amazon
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default BookCard;
