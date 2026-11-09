import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router"

import {
  CssBaseline,
  ThemeProvider
} from "@mui/material"

import App from "./App.jsx"
import theme from "./theme/theme"
import { InventarioProvider } from "./context/InventarioContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HashRouter>
        <InventarioProvider>
          <App />
        </InventarioProvider>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
)
