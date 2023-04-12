import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Bio } from "./components/Bio/Bio";
import "./App.css";
import BasicTabs from "./components/BasicTabs/BasicTabs";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>
          <Bio></Bio>
          <BasicTabs />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
