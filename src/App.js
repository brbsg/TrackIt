import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebFont from "webfontloader";

import GlobalStyle from "./globalStyles/GlobalStyles";
import Habits from "./pages/Habits/Habits";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Today from "./pages/Today/Today";

import { UserProvider } from "./context/User";
import Historic from "./pages/Historic/Historic";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lexend Deca"],
      },
    });
  }, []);

  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
