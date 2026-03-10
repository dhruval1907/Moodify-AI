import React from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app.router";
import "./features/shared/style.scss"
import { AuthProvider } from "../src/features/auth/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App