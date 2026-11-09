import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography
} from "@mui/material"

import AppRoutes from "./routes/AppRoutes"
import MenuInferior from "./components/MenuInferior"

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        pb: 10
      }}
    >
      <AppBar position="static" color="success">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1.3
              }}
            >
              Gestión de inventario
            </Typography>

            <Typography variant="h5" fontWeight="bold">
              Supermercado MFC
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <AppRoutes />
      </Container>

      <MenuInferior />
    </Box>
  )
}

export default App
