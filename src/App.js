import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material";

function App() {
  //mit createTheme() kann das Standard Theme bearbeitet werden.
  const theme = createTheme({
    palette: {
      mode: "dark"
    },
  })

  return (
    <ThemeProvider theme="theme"> {/** Der Theme Provider gibt das Theme Objekt an alle Kinder weiter */}
      <CssBaseline /> {/** Entfernt das Margin des Elternelements */}
      <Layout>
        <div>
          <h1>This is the App Component</h1>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
