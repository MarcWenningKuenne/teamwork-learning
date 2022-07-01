import React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Dashboard from "./components/Dashboard";
import Persons from "./components/Persons";

function App() {
  //mit createTheme() kann das Standard Theme bearbeitet werden.
  const theme = createTheme({
    palette: {
      mode: "dark"
    },
  })

  return (
    <ThemeProvider theme={theme}> {/** Der Theme Provider gibt das Theme Objekt an alle Kinder weiter */}
      <CssBaseline /> {/** Entfernt das Margin des Elternelements */}
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="persons" element={<Persons/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
