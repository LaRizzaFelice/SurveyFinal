import { FC, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { LoginFields } from "./partials/LoginFields";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../Firebase/initialize";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      setIsLoading(false);
      if (result.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const onCreateAccount = async () => {
    setIsLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      setIsLoading(false);
      if (result.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <LoginFields
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onCreateAccount={onCreateAccount}
          onLogin={onLogin}
        />
      )}
    </Box>
  );
};
