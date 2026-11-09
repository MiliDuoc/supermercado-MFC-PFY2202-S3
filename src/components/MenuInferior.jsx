import {
  Box,
  Button,
  Paper
} from "@mui/material"

import { NavLink } from "react-router"

const opciones = [
  ["Inicio", "/"],
  ["Agregar", "/agregar"],
  ["Inventario", "/inventario"],
  ["Carrito", "/carrito"],
  ["Tiendas", "/tiendas"],
  ["Contacto", "/contacto"]
]

function MenuInferior() {
  return (
    <Paper
      component="nav"
      elevation={8}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        p: 1
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 0.5
        }}
      >
        {opciones.map(([texto, ruta]) => (
          <Button
            key={ruta}
            component={NavLink}
            to={ruta}
            end={ruta === "/"}
            color="success"
            sx={{
              "&.active": {
                backgroundColor: "success.main",
                color: "white"
              }
            }}
          >
            {texto}
          </Button>
        ))}
      </Box>
    </Paper>
  )
}

export default MenuInferior
