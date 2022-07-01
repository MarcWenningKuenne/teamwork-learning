import React from "react";
import Layout from "./components/Layout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

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
        <h1>This is the App Component</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
