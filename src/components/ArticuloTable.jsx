import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"

import { Link } from "react-router"

function ArticuloTable({ articulos }) {
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Producto</strong></TableCell>
            <TableCell><strong>Marca</strong></TableCell>
            <TableCell><strong>Categoría</strong></TableCell>
            <TableCell align="center"><strong>Stock</strong></TableCell>
            <TableCell><strong>Estado</strong></TableCell>
            <TableCell align="center"><strong>Acción</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {articulos.map((articulo) => (
            <TableRow key={articulo.id} hover>
              <TableCell>{articulo.nombre}</TableCell>
              <TableCell>{articulo.marca}</TableCell>
              <TableCell>{articulo.tipo}</TableCell>
              <TableCell align="center">
                {articulo.stock}
              </TableCell>

              <TableCell>
                <Chip
                  label={
                    articulo.stock >= 10
                      ? "Disponible"
                      : articulo.stock > 0
                      ? "Stock bajo"
                      : "Sin stock"
                  }
                  color={
                    articulo.stock >= 10
                      ? "success"
                      : articulo.stock > 0
                      ? "warning"
                      : "error"
                  }
                  size="small"
                />
              </TableCell>

              <TableCell align="center">
                <Button
                  component={Link}
                  to={`/inventario/${articulo.id}`}
                  variant="outlined"
                  color="success"
                  size="small"
                >
                  Ver detalle
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ArticuloTable
