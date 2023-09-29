import React, { useState } from "react";
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { tokens } from "../../theme";
// import axios from "../../axios/axios";
// import Copyright from "../../components/Copyright";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState(null);

//   const login = async (data) => {
//     try {
//       const response = await axios.post("auth/login", data);
//       const { user, token } = response.data;

//       if (user && user.type !== "ADMIN") {
//         setError(true);
//         return;
//       }

//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("token", token);

//       window.location.href = "/";
//     } catch (error) {
//       console.log(error);
//       setError(true);
//     }
//   };

  const handleLogin = (e) => {
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "AppWorkspace" }}>
            <AccountCircleIcon fontSize="large" style={{ color: colors.greenAccent[500] }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            YinYang
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              inputProps={{ maxLength: 100 }}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setUserData((prev) => {
                  return { ...prev, email: e.target.value };
                });
                setEmail((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              inputProps={{ minLength: 6 }}
              error={password?.length > 0 && password?.length < 6}
              helperText="Minimo de 6 caracteres"
              name="Senha"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setUserData((prev) => {
                  return { ...prev, password: e.target.value };
                });
                setPassword((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />

            {error && (
              <Alert variant="outlined" severity="warning">
                {<p>E-mail incorreto</p>}
              </Alert>
            )}
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 2, mb: 2 }}
              style={{ backgroundColor: colors.greenAccent[600] }}
              type="submit"
              onClick={handleLogin}
              disabled={!(email && password)}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;