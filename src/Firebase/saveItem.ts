import { doc, setDoc, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { firestoreDB } from "./initialize";

export const saveItem = <T extends object>(tableName: string, item: T) => {
  const id = uuidv4();
  setDoc(doc(firestoreDB, tableName, id), {
    id,
    createdAt: Timestamp.fromDate(new Date()),
    ...item,
  });
};
