import React from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app.router";
import "./features/shared/style.scss"

const App = () => {
  return (
    <AppRouter />
  )
}

export default App