// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CadastroAlbum from './pages/CadastroAlbum'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<CadastroAlbum />} />
    </Routes>
  )
}

export default App
