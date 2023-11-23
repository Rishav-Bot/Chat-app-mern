import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Chat = lazy(() => import("./pages/Chat"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const SetAvatar = lazy(() => import("./pages/SetAvatar"));

export default function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/setAvatar" element={<SetAvatar />}></Route>
        <Route path="/" element={<Chat />}></Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

