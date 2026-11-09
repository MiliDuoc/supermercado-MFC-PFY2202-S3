import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0"
    },
    success: {
      main: "#2e7d32"
    },
    background: {
      default: "#f4f6f8"
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily:
      "Inter, Arial, Helvetica, sans-serif"
  }
})

export default theme
