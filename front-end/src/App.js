import React from "react";
import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "./scenes/global/Topbar";
import Sidemenu from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Pacients from "./scenes/patients";
import Form from "./scenes/form";
import Calendario from "./scenes/calendar";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Line from "./scenes/pine";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidemenu isSidebar={isSidebar} />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pacientes" element={<Pacients />} />
              <Route path="/formulario" element={<Form />} />
              <Route path="/calendario" element={<Calendario />} />
              {/* <Route path="/" element={<Bar />} /> */}
              {/* <Route path="/" element={<Pie />} /> */}
              {/* <Route path="/" element={<Line />} /> */}
              {/* <Route path="/" element={<FAQ />} /> */}
              {/* <Route path="/" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
