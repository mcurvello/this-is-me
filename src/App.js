import React from "react";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./styles/theme";
import Switch from "./routes/Routes";
import Header from "./components/Header";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Header />
      <Switch />
    </NativeBaseProvider>
  );
}
