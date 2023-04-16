import React from "react";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./styles/theme";
import Header from "./common/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Download from "./components/Download";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Header />
      <AboutMe />
      <Contact />
      <Skills />
      <Experience />
      <Education />
      <Download />
    </NativeBaseProvider>
  );
}
