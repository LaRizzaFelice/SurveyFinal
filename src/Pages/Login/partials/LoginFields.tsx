import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

export interface LoginFieldsProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onCreateAccount: () => void;
  onLogin: () => void;
}

export const LoginFields: FC<LoginFieldsProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  onCreateAccount,
  onLogin,
}) => {
  return (
    <Box display="flex" flexDirection="column" width={400} gap={1}>
      <TextField
        label="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Box display="flex" gap={1}>
        <Button sx={{ flex: 1 }} variant="contained" onClick={onCreateAccount}>
          Create account
        </Button>
        <Button sx={{ flex: 1 }} variant="contained" onClick={onLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
