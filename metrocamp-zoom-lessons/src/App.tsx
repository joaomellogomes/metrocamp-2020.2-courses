import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import AppRoutes from "./components/routes";
import defaultTheme from './components/themes/defaultTheme'

import "./App.css";
// import courses from "./assets/courses.json";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
