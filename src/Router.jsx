import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
