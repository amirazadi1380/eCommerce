import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import AllProducts from "./components/AllProducts"
import Login from './pages/login/Login'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<AllProducts/>}/>
      <Route path="/products/:title" element={<ProductDetail/>}/>
      <Route path="/auth" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
