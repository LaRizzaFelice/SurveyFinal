import { FC, useState, useEffect } from "react";
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { DataType, Event } from "../Home";
import { red } from '@mui/material/colors';

export interface SingleEventProps {
  event: Event;
  imageUrlEvents: string[];
  imageLink: string;
  
}

export const SingleEvent: FC<SingleEventProps> = ({ event, imageLink}) => {

  const [imageUrl, setImageUrl] = useState<DataType>();


  useEffect(() => {
    if (!imageUrl) {
      fetch("/data.json")
        .then((result) => result.json())
        .then((resultImageUrl) => setImageUrl(resultImageUrl));
    }
  }, [imageUrl]);

  return (
    <Box display="flex" gap={1}>
      <Card sx={{ maxWidth: 345 }} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="event">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title={event.title}
          subheader={event.date}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageLink}
          alt="Automotive Course"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Description of the automotive course.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
