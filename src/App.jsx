import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./home"
import Profile from "./profile"
import Layout from "./layout"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Route >
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App