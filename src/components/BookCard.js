import React from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Collapse, IconButton, Stack } from "@mui/material";
import { display } from "@mui/system";

const BookCard = ({
  ImageURL,
  Title,
  Author,
  Recommendation,
  PurchaseLink,
}) => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="image" height="200" image={ImageURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="h6">By: {Author}</Typography>
          <Stack direction="row" spacing={0} sx={{
            float: "right",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Typography>Recommendation</Typography>
            <IconButton
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              {collapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Stack>

          <Collapse in={collapsed} timeout="auto" unmountOnExit>
            <Typography variant="paragraph" color="text.secondary">
              {Recommendation}
            </Typography>
          </Collapse>
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
