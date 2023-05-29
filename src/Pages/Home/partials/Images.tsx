import { FC } from "react";
import { Box } from "@mui/material";

export interface ImagesProps {
  images: string[];
}

export const Images: FC<ImagesProps> = ({ images }) => {
  return (
    <Box display="flex" gap={1}>
      {images.map((image) => (
        <img src={image} height={300} />
      ))}
    </Box>
  );
};
