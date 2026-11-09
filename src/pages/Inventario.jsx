import { useState } from "react"
import {
  Box,
  Typography
} from "@mui/material"

import { useInventario } from "../context/InventarioContext"
import FiltroCategoria from "../components/FiltroCategoria"
import ArticuloTable from "../components/ArticuloTable"

function Inventario() {
  const { articulos } = useInventario()
  const [categoria, setCategoria] = useState("Todas")

  const articulosFiltrados =
    categoria === "Todas"
      ? articulos
      : articulos.filter(
          (articulo) => articulo.tipo === categoria
        )

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Inventario completo
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Visualiza y filtra todos los artículos disponibles.
      </Typography>

      <FiltroCategoria
        categoria={categoria}
        onCambiar={setCategoria}
      />

      <ArticuloTable articulos={articulosFiltrados} />
    </Box>
  )
}

export default Inventario
