import { useState } from "react"
import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography
} from "@mui/material"

const regexNombre =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,50}$/

const regexCorreo =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contacto() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  })

  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const cambiar = (evento) => {
    const { name, value } = evento.target

    setDatos((actual) => ({
      ...actual,
      [name]: value
    }))

    setErrores((actual) => ({
      ...actual,
      [name]: ""
    }))

    setEnviado(false)
  }

  const enviar = (evento) => {
    evento.preventDefault()

    const nuevosErrores = {}

    if (!regexNombre.test(datos.nombre.trim())) {
      nuevosErrores.nombre =
        "Ingresa un nombre válido."
    }

    if (!regexCorreo.test(datos.correo.trim())) {
      nuevosErrores.correo =
        "Ingresa un correo válido."
    }

    if (datos.mensaje.trim().length < 10) {
      nuevosErrores.mensaje =
        "El mensaje debe tener al menos 10 caracteres."
    }

    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length > 0) {
      return
    }

    setEnviado(true)

    setDatos({
      nombre: "",
      correo: "",
      mensaje: ""
    })
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Envíanos tus consultas o comentarios.
      </Typography>

      <Paper
        component="form"
        onSubmit={enviar}
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
          value={datos.nombre}
          onChange={cambiar}
          error={Boolean(errores.nombre)}
          helperText={errores.nombre}
        />

        <TextField
          label="Correo electrónico"
          name="correo"
          value={datos.correo}
          onChange={cambiar}
          error={Boolean(errores.correo)}
          helperText={errores.correo}
        />

        <TextField
          label="Mensaje"
          name="mensaje"
          multiline
          rows={4}
          value={datos.mensaje}
          onChange={cambiar}
          error={Boolean(errores.mensaje)}
          helperText={errores.mensaje}
        />

        <Button
          type="submit"
          variant="contained"
          color="success"
        >
          Enviar mensaje
        </Button>

        {enviado && (
          <Alert severity="success">
            Mensaje enviado correctamente.
          </Alert>
        )}
      </Paper>
    </Box>
  )
}

export default Contacto