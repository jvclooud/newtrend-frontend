import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false)
  const [albuns, setAlbuns] = useState<any[]>([])

  const fetchAlbuns = () => {
    fetch('http://localhost:8080/albuns')
      .then(res => res.json())
      .then(data => setAlbuns(data))
      .catch(() => setAlbuns([]))
  }

  useEffect(() => {
    fetchAlbuns()
  }, [])

  const handleAdminClick = () => {
    setMostrarCadastro(true)
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja apagar este álbum?')) {
      await fetch(`http://localhost:8080/albuns/${id}`, { method: 'DELETE' })
      fetchAlbuns()
    }
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
        <h2>🌟 Artistas</h2>
        <div className="lista-artistas">
          <div className="artista-card">
            <img src="https://upload.wikimedia.org/wikipedia/pt/9/93/Kendrick_Lamar_-_GNX.png" alt="Kendrick Lamar" />
            <span>Kendrick Lamar</span>
          </div>
          <div className="artista-card">
            <img src="https://i.scdn.co/image/ab6761610000e5eb593f35db6f6837e1047a5e33" alt="LE SSERAFIM" />
            <span>LE SSERAFIM</span>
          </div>
          <div className="artista-card">
            <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845ed52ae23a0c2600ae34c9d5" alt="Veigh" />
            <span>Veigh</span>
          </div>
        </div>
        <div className="ver-mais">
          <button disabled>Ver Mais</button>
        </div>
      </section>

      <section className="shop">
        <h2>Shop</h2>
        <div className="grid-albuns">
          {albuns.length === 0 ? (
            <p>Nenhum álbum cadastrado ainda.</p>
          ) : (
            albuns.map((album, i) => (
              <div key={album.id || i} className="card-album">
                <img src="/placeholder.jpg" alt="Capa do Álbum" />
                <h3>{album.titulo}</h3>
                <p><strong>ID:</strong> {album.id}</p>
                <p>R$ {Number(album.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <button>COMPRAR</button>
                {mostrarCadastro && (
                  <button style={{ marginLeft: 8, background: 'red', color: 'white' }} onClick={() => handleDelete(album.id)}>
                    APAGAR ÁLBUM
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
