import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      400: "#D9D9D9",
      800: "#6E6E6E",
      900: "#515252",
    },
    white: "#FFF",
    black: "#000",
    primary: "#E5B500",
  },
  fontSizes: {
    xs: 18,
    sm: 20,
    md: 24,
    lg: 36,
    xl: 48,
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    menu: "Outfit, sans-serif",
    caption: "Outfit, sans-serif",
  },
});
