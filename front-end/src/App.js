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
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/pine";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

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
              <Route path="/patients" element={<Pacients />} />
              {/* <Route path="/" element={<Contacts />} /> */}
              {/* <Route path="/" element={<Invoices />} /> */}
              {/* <Route path="/" element={<Form />} /> */}
              {/* <Route path="/" element={<Bar />} /> */}
              {/* <Route path="/" element={<Pie />} /> */}
              {/* <Route path="/" element={<Line />} /> */}
              {/* <Route path="/" element={<FAQ />} /> */}
              {/* <Route path="/" element={<Geography />} /> */}
              {/* <Route path="/" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
