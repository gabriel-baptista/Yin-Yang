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
  Modal,
} from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { tokens } from "../../theme";
import Dashboard from "../dashboard";
import { Route, useNavigate } from "react-router-dom";
import SignUp from "../../components/SignUp";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = (e) => {
    <Route path="/dashboard" element={<Dashboard />} />;
  };

  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
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
            <AccountCircleIcon
              fontSize="large"
              style={{ color: colors.greenAccent[500] }}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            YinYang
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
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
              sx={{ mt: 2, mb: 0 }}
              style={{ backgroundColor: colors.greenAccent[600] }}
              type="submit"
              onClick={routeChange}
            >
              Entrar
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              style={{ backgroundColor: colors.greenAccent[600] }}
              type="submit"
              onClick={handleOpen}
            >
              Cadastrar-se
            </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 700,
                height: 500,
                bgcolor: colors.primary[400],
                // border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                overflow: "scroll",
                overflowX: "hidden",
              }}
            >
              <SignUp />
            </Box>
          </Modal>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
