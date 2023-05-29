import { FC, useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { SingleEvent } from "./partials/SingleEvent";
import { Images } from "./partials/Images";

export type DataType = {
  title: string;
  some_events: Event[];
  description: string;
  pictures: string[];
  picUrlEvents: string[];
};

export type Event = {
  title: string;
  date: string;
};

export const Home: FC = () => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    if (!data) {
      fetch("/data.json")
        .then((result) => result.json())
        .then((resultData) => setData(resultData));
    }
  }, [data]);

  if (!data) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box padding={"50px"}>
        <Typography variant="h2">{data.title}</Typography>
      </Box>
      <Typography variant="h4" >{data.description}</Typography>
      <Box padding={"50px"}>
        <Images images={data.pictures} />
      </Box>
      <Typography variant="h3">Upcoming Events</Typography>
      <Box sx={{ display: "inline-flex" }}>
        {data.some_events.map((event, index) => (
          <Box padding={"10px"} key={index}>
            <SingleEvent event={event}/>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
