import { lazy, Suspense } from "react"
import {
  CircularProgress,
  Box
} from "@mui/material"

import {
  Route,
  Routes
} from "react-router"

const Home = lazy(() => import("../pages/Home"))
const AgregarArticulo = lazy(
  () => import("../pages/AgregarArticulo")
)
const Inventario = lazy(
  () => import("../pages/Inventario")
)
const DetalleArticulo = lazy(
  () => import("../pages/DetalleArticulo")
)
const Carrito = lazy(
  () => import("../pages/Carrito")
)
const NuestrasTiendas = lazy(
  () => import("../pages/NuestrasTiendas")
)
const Contacto = lazy(
  () => import("../pages/Contacto")
)
const NoEncontrado = lazy(
  () => import("../pages/NoEncontrado")
)

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 8
          }}
        >
          <CircularProgress color="success" />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/agregar"
          element={<AgregarArticulo />}
        />

        <Route
          path="/inventario"
          element={<Inventario />}
        />

        <Route
          path="/inventario/:id"
          element={<DetalleArticulo />}
        />

        <Route
          path="/carrito"
          element={<Carrito />}
        />

        <Route
          path="/tiendas"
          element={<NuestrasTiendas />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="*"
          element={<NoEncontrado />}
        />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
