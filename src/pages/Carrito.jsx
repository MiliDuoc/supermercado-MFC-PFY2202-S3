import {
  Alert,
  Box,
  Typography
} from "@mui/material"

import { useInventario } from "../context/InventarioContext"
import CarritoItem from "../components/CarritoItem"

function Carrito() {
  const {
    carrito,
    articulos,
    aumentarCantidad,
    disminuirCantidad
  } = useInventario()

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Carrito de compras
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Aumenta o disminuye cantidades y observa cómo se actualiza el inventario.
      </Typography>

      {carrito.length === 0 ? (
        <Alert severity="info">
          El carrito está vacío.
        </Alert>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)"
            },
            gap: 2
          }}
        >
          {carrito.map((producto) => {
            const articulo = articulos.find(
              (item) => item.id === producto.id
            )

            return (
              <CarritoItem
                key={producto.id}
                producto={producto}
                aumentar={aumentarCantidad}
                disminuir={disminuirCantidad}
                stockDisponible={
                  articulo?.stock ?? 0
                }
              />
            )
          })}
        </Box>
      )}
    </Box>
  )
}

export default Carrito
