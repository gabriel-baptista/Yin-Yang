import React from "react";
import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidemenu from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Pacients from "./scenes/patients";
import Form from "./scenes/form";
import Calendario from "./scenes/calendar";
// import Line from "./scenes/line";
import Login from "./scenes/login/login";
import User from "./scenes/user";

// rotas 
function AuthenticatedRoutes(){
  const [isSidebar] = useState(true);
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    <Sidemenu isSidebar={isSidebar} />
      <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pacientes" element={<Pacients />} />
              <Route path="/formulario" element={<Form />} />
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/user" element={<User />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/line" element={<Line />} /> */}
            </Routes>
          </main>
    </>
  );
}

const App = () => {
  const [theme, colorMode] = useMode();
  const [isAuthenticated] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            {isAuthenticated ? (
              <Route path="/*" element={<AuthenticatedRoutes />} />
            ) : (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
