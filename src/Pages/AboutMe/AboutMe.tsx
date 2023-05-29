import { FC, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Link,
} from "@mui/material";

type DataType = {
  name: string;
  description: string;
  description2: string;
  email: string;
  portfolioUrl: string;
};

export const AboutMe: FC = () => {
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
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          image="/images/Avatarfelice.JPG"
          alt="Your Name"
          title="My Portfolio Item"
          sx={{
            height: 400,
            width: "100%",
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {data.description2}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Contact me at: <Link href={`mailto:${data.email}`}>{data.email}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check out my portfolio: <Link href={data.portfolioUrl}>{data.portfolioUrl}</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
