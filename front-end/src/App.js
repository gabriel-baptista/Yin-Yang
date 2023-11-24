import React from "react";
import { useState, useEffect } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidemenu from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Pacients from "./scenes/patients";
import Form from "./scenes/form";
import Calendario from "./scenes/calendar";
// import Line from "./scenes/line";
import Login from "./scenes/login/login";
import User from "./scenes/user";
import Recipe from "./scenes/recipe";

function App() {
  const [theme, colorMode] = useMode();  // Certifique-se de chamar useMode dentro da função componente App
  const [isSidebar, setIsSidebar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Verifica se a rota atual é a de login e oculta o Sidemenu e Topbar
  useEffect(() => {
    setIsSidebar(location.pathname !== '/login');
  }, [location.pathname]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isSidebar && <Sidemenu isSidebar={isSidebar} />}
          <main className="content">
            {isSidebar && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              {/* Adiciona o redirecionamento para /login quando a aplicação é carregada */}
              <Route
                path="/"
                element={<Navigate to="/login" />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pacientes" element={<Pacients />} />
              <Route path="/formulario" element={<Form />} />
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/user" element={<User />} />
              <Route path="/recipes" element={<Recipe />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// // rotas
// function AuthenticatedRoutes(){
//   const [isSidebar] = useState(true);
//   // const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <>
//     <Sidemenu isSidebar={isSidebar} />
//       <main className="content">
//             <Topbar />
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/pacientes" element={<Pacients />} />
//               <Route path="/formulario" element={<Form />} />
//               <Route path="/calendario" element={<Calendario />} />
//               <Route path="/user" element={<User />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/recipes" element={<Recipe />} />
//               {/* <Route path="/line" element={<Line />} /> */}
//             </Routes>
//           </main>
//     </>
//   );
// }

// const App = (setAuthenticated = false) => {
//   const [theme, colorMode] = useMode();
//   const [isAuthenticated] = useState(setAuthenticated);
//   // const [isAuthenticated, setIsAuthenticated] = useState(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Routes>
//             {isAuthenticated ? (
//               <Route path="/*" element={<AuthenticatedRoutes />} />
//             ) : (
//               <>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="*" element={<Navigate to="/login" replace />} />
//               </>
//             )}
//           </Routes>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

export default App;
