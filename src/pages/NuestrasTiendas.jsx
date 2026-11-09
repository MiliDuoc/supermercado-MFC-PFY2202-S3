import {
  Box,
  Card,
  CardContent,
  Typography
} from "@mui/material"

import { TIENDAS } from "../data/tiendas"

function NuestrasTiendas() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Nuestras tiendas
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Conoce nuestras sucursales y horarios.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)"
          },
          gap: 2
        }}
      >
        {TIENDAS.map((tienda) => (
          <Card key={tienda.id}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {tienda.nombre}
              </Typography>

              <Typography>
                {tienda.direccion}
              </Typography>

              <Typography color="text.secondary">
                Horario: {tienda.horario}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default NuestrasTiendas
