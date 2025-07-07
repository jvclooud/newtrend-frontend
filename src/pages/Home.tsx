// src/pages/Home.tsx
import { useState } from 'react'
import './Home.css'

function Home() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false)

  const handleAdminClick = () => {
    setMostrarCadastro(true)
  }

  return (
    <div style={{ width: '100%' }}>
      <header className="header">
        <div className="logo">NewTrend</div>
        <nav className="nav">
          <a href="/">INICIO</a>
          <a href="#">NOTICIAS</a>
          <a href="#">EVENTOS</a>
          {mostrarCadastro && <a href="/cadastro">CADASTRO DE ÁLBUNS</a>}
        </nav>
        <div className="actions">
          <button>USUÁRIO</button>
          <button onClick={handleAdminClick}>ADMINISTRADOR</button>
        </div>
      </header>

      <section className="artistas">
        <h2>Artistas</h2>
        <div className="lista-artistas">
          <span>The Weeknd</span>
          <span>Travis Scott</span>
          <span>LE SSERAFIM</span>
        </div>
      </section>

      <section className="shop">
        <h2>Shop</h2>
        <div className="grid-albuns">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="card-album">
              <img src="/placeholder.jpg" alt="Capa do Álbum" />
              <h3>Starboys</h3>
              <p>R$ 690,00</p>
              <button>COMPRAR</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
