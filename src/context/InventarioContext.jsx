import {
  createContext,
  useContext,
  useEffect,
  useReducer
} from "react"

import { productosIniciales } from "../data/productosIniciales"
import {
  ESTADO_INICIAL,
  inventarioReducer
} from "../reducers/inventarioReducer"

const InventarioContext = createContext(null)

function cargarEstadoInicial() {
  try {
    const guardado = localStorage.getItem("supermercado-mfc")

    if (guardado) {
      return JSON.parse(guardado)
    }
  } catch (error) {
    console.error("No fue posible cargar localStorage:", error)
  }

  return {
    ...ESTADO_INICIAL,
    articulos: productosIniciales
  }
}

export function InventarioProvider({ children }) {
  const [state, dispatch] = useReducer(
    inventarioReducer,
    undefined,
    cargarEstadoInicial
  )

  useEffect(() => {
    localStorage.setItem(
      "supermercado-mfc",
      JSON.stringify(state)
    )
  }, [state])

  const agregarArticulo = (articulo) => {
    dispatch({
      type: "AGREGAR_ARTICULO",
      payload: {
        ...articulo,
        id: crypto.randomUUID(),
        stock: Number(articulo.stock)
      }
    })
  }

  const agregarAlCarrito = (id) => {
    dispatch({
      type: "AGREGAR_CARRITO",
      payload: id
    })
  }

  const aumentarCantidad = (id) => {
    dispatch({
      type: "AUMENTAR_CARRITO",
      payload: id
    })
  }

  const disminuirCantidad = (id) => {
    dispatch({
      type: "DISMINUIR_CARRITO",
      payload: id
    })
  }

  return (
    <InventarioContext.Provider
      value={{
        articulos: state.articulos,
        carrito: state.carrito,
        agregarArticulo,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad
      }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

export function useInventario() {
  const contexto = useContext(InventarioContext)

  if (!contexto) {
    throw new Error(
      "useInventario debe utilizarse dentro de InventarioProvider"
    )
  }

  return contexto
}
