import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { collection, orderBy, query } from "firebase/firestore";
import { firestoreDB } from "../../Firebase/initialize";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const Items: FC = () => {
  const collectionId = collection(firestoreDB, "items");
  const queryItem = query(collectionId, orderBy("createdAt"));
  const [data, loading, error] = useCollectionData(queryItem);

  return (
    <Box>
      {data?.map((item) => (
        <Typography>{item.title}</Typography>
      ))}
    </Box>
  );
};
