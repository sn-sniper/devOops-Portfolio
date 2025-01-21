import "./App.css"
import Home from "./pages/Home"
import Testing from "./pages/Testing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
