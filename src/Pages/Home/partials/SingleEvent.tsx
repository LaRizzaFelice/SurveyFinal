import { FC } from "react";
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { Event } from "../Home";
import { red } from '@mui/material/colors';

export interface SingleEventProps {
  event: Event;
}

export const SingleEvent: FC<SingleEventProps> = ({ event }) => {
  return (
    <Box display="flex" gap={1}>
      <Card sx={{ width: "100%" }}>
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
          image={event.imageUrl}
          alt="Automotive Course"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
