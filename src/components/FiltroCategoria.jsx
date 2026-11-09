import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material"

import { CATEGORIAS } from "../constants/categorias"

function FiltroCategoria({
  categoria,
  onCambiar
}) {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel id="filtro-categoria-label">
        Filtrar por categoría
      </InputLabel>

      <Select
        labelId="filtro-categoria-label"
        value={categoria}
        label="Filtrar por categoría"
        onChange={(evento) =>
          onCambiar(evento.target.value)
        }
      >
        {CATEGORIAS.map((opcion) => (
          <MenuItem key={opcion} value={opcion}>
            {opcion}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default FiltroCategoria
