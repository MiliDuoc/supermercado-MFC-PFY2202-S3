export const ESTADO_INICIAL = {
  articulos: [],
  carrito: []
}

export function inventarioReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_ARTICULO":
      return {
        ...state,
        articulos: [...state.articulos, action.payload]
      }

    case "AGREGAR_CARRITO": {
      const articulo = state.articulos.find(
        (item) => item.id === action.payload
      )

      if (!articulo || articulo.stock <= 0) {
        return state
      }

      const existente = state.carrito.find(
        (item) => item.id === articulo.id
      )

      const carritoActualizado = existente
        ? state.carrito.map((item) =>
            item.id === articulo.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        : [
            ...state.carrito,
            {
              id: articulo.id,
              nombre: articulo.nombre,
              marca: articulo.marca,
              tipo: articulo.tipo,
              cantidad: 1
            }
          ]

      return {
        ...state,
        articulos: state.articulos.map((item) =>
          item.id === articulo.id
            ? { ...item, stock: item.stock - 1 }
            : item
        ),
        carrito: carritoActualizado
      }
    }

    case "AUMENTAR_CARRITO": {
      const articulo = state.articulos.find(
        (item) => item.id === action.payload
      )

      if (!articulo || articulo.stock <= 0) {
        return state
      }

      return {
        ...state,
        articulos: state.articulos.map((item) =>
          item.id === action.payload
            ? { ...item, stock: item.stock - 1 }
            : item
        ),
        carrito: state.carrito.map((item) =>
          item.id === action.payload
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }
    }

    case "DISMINUIR_CARRITO": {
      const productoCarrito = state.carrito.find(
        (item) => item.id === action.payload
      )

      if (!productoCarrito) {
        return state
      }

      const nuevoCarrito =
        productoCarrito.cantidad === 1
          ? state.carrito.filter(
              (item) => item.id !== action.payload
            )
          : state.carrito.map((item) =>
              item.id === action.payload
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            )

      return {
        ...state,
        articulos: state.articulos.map((item) =>
          item.id === action.payload
            ? { ...item, stock: item.stock + 1 }
            : item
        ),
        carrito: nuevoCarrito
      }
    }

    default:
      return state
  }
}
