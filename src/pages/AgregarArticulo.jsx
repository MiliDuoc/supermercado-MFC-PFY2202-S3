import { useState } from "react"
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography
} from "@mui/material"

import { CATEGORIAS } from "../constants/categorias"
import { useInventario } from "../context/InventarioContext"

const inicial = {
  nombre: "",
  marca: "",
  tipo: "",
  stock: ""
}

const regexTexto =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .-]{2,50}$/

const regexStock = /^\d+$/

function AgregarArticulo() {
  const { agregarArticulo } = useInventario()

  const [formulario, setFormulario] = useState(inicial)
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState(null)

  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setFormulario((actual) => ({
      ...actual,
      [name]: value
    }))

    setErrores((actual) => ({
      ...actual,
      [name]: ""
    }))

    setMensaje(null)
  }

  const validar = () => {
    const nuevosErrores = {}

    if (!regexTexto.test(formulario.nombre.trim())) {
      nuevosErrores.nombre =
        "Ingresa un nombre válido entre 2 y 50 caracteres."
    }

    if (!regexTexto.test(formulario.marca.trim())) {
      nuevosErrores.marca =
        "Ingresa una marca válida entre 2 y 50 caracteres."
    }

    if (!formulario.tipo) {
      nuevosErrores.tipo = "Selecciona una categoría."
    }

    if (
      !regexStock.test(formulario.stock) ||
      Number(formulario.stock) < 0
    ) {
      nuevosErrores.stock =
        "El stock debe ser un número entero igual o mayor que 0."
    }

    setErrores(nuevosErrores)

    return Object.keys(nuevosErrores).length === 0
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (!validar()) {
      setMensaje({
        severidad: "error",
        texto: "Revisa los campos indicados."
      })
      return
    }

    agregarArticulo(formulario)

    setFormulario(inicial)
    setErrores({})

    setMensaje({
      severidad: "success",
      texto: "Artículo agregado correctamente."
    })
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Agregar artículo
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Ingresa un nuevo producto al inventario.
      </Typography>

      <Paper
        component="form"
        onSubmit={manejarEnvio}
        elevation={2}
        sx={{
          p: 3,
          maxWidth: 650,
          display: "grid",
          gap: 2
        }}
      >
        <TextField
          label="Nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          error={Boolean(errores.nombre)}
          helperText={errores.nombre}
        />

        <TextField
          label="Marca"
          name="marca"
          value={formulario.marca}
          onChange={manejarCambio}
          error={Boolean(errores.marca)}
          helperText={errores.marca}
        />

        <TextField
          select
          label="Categoría"
          name="tipo"
          value={formulario.tipo}
          onChange={manejarCambio}
          error={Boolean(errores.tipo)}
          helperText={errores.tipo}
        >
          {CATEGORIAS
            .filter((categoria) => categoria !== "Todas")
            .map((categoria) => (
              <MenuItem key={categoria} value={categoria}>
                {categoria}
              </MenuItem>
            ))}
        </TextField>

        <TextField
          label="Stock"
          name="stock"
          type="number"
          value={formulario.stock}
          onChange={manejarCambio}
          error={Boolean(errores.stock)}
          helperText={errores.stock}
          slotProps={{
            htmlInput: {
              min: 0,
              step: 1
            }
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="success"
        >
          Agregar al inventario
        </Button>

        {mensaje && (
          <Alert severity={mensaje.severidad}>
            {mensaje.texto}
          </Alert>
        )}
      </Paper>
    </Box>
  )
}

export default AgregarArticulo