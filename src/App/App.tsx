import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import { Box } from "@mui/material";

export const App: FC = () => {
  return (
    <Box height="100vh" width="100vw">
      <RouterProvider router={router} />
    </Box>
  );
};
