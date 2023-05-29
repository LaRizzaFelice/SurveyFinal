import { FC } from "react";
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { DataType, Event } from "../Home";
import { red } from '@mui/material/colors';

export interface SingleEventProps {
  event: Event;
  
}

export const SingleEvent: FC<SingleEventProps> = ({ event}) => {
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
          image={"/images/automotive-course-image.jpg"} // Replace with your automotive course image URL
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
