import {
  Box,
  Button,
  Card,
  CardContent,
  Typography
} from "@mui/material"

function CarritoItem({
  producto,
  aumentar,
  disminuir,
  stockDisponible
}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {producto.nombre}
        </Typography>

        <Typography color="text.secondary">
          {producto.marca} · {producto.tipo}
        </Typography>

        <Typography sx={{ my: 2 }}>
          Cantidad en carrito:{" "}
          <strong>{producto.cantidad}</strong>
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Stock disponible: {stockDisponible}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => aumentar(producto.id)}
            disabled={stockDisponible <= 0}
          >
            +
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => disminuir(producto.id)}
          >
            -
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CarritoItem
