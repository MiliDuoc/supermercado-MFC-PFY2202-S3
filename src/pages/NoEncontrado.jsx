import {
  Box,
  Button,
  Paper,
  Typography
} from "@mui/material"

import { Link } from "react-router"

function NoEncontrado() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 5,
          textAlign: "center",
          maxWidth: 500,
          width: "100%"
        }}
      >
        <Typography
          variant="h2"
          color="success.main"
          fontWeight="bold"
        >
          404
        </Typography>

        <Typography variant="h5" gutterBottom>
          Página no encontrada
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          La página que intentas visitar no existe.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          color="success"
        >
          Volver al inicio
        </Button>
      </Paper>
    </Box>
  )
}

export default NoEncontrado