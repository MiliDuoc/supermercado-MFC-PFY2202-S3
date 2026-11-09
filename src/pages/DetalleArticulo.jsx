import {
  Alert,
  Box,
  Button,
  Chip,
  Paper,
  Typography
} from "@mui/material"

import { Link, useParams } from "react-router"
import { useInventario } from "../context/InventarioContext"

function DetalleArticulo() {
  const { id } = useParams()

  const {
    articulos,
    agregarAlCarrito
  } = useInventario()

  const articulo = articulos.find(
    (item) => String(item.id) === String(id)
  )

  if (!articulo) {
    return (
      <Alert severity="error">
        El artículo solicitado no existe.
      </Alert>
    )
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Detalle del artículo
      </Typography>

      <Paper
        elevation={2}
        sx={{
          p: 3,
          maxWidth: 650
        }}
      >
        <Typography variant="h5" gutterBottom>
          {articulo.nombre}
        </Typography>

        <Typography>
          <strong>Marca:</strong> {articulo.marca}
        </Typography>

        <Typography>
          <strong>Categoría:</strong> {articulo.tipo}
        </Typography>

        <Typography sx={{ my: 2 }}>
          <strong>Stock disponible:</strong>{" "}
          {articulo.stock}
        </Typography>

        <Chip
          label={
            articulo.stock > 0
              ? "Disponible"
              : "Sin stock"
          }
          color={
            articulo.stock > 0
              ? "success"
              : "error"
          }
          sx={{ mb: 3 }}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="success"
            disabled={articulo.stock <= 0}
            onClick={() =>
              agregarAlCarrito(articulo.id)
            }
          >
            Agregar al carrito
          </Button>

          <Button
            component={Link}
            to="/inventario"
            variant="outlined"
          >
            Volver al inventario
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default DetalleArticulo
