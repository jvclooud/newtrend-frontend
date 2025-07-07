// src/pages/CadastroAlbum.tsx
import { useState } from 'react'
import './CadastroAlbum.css'

function CadastroAlbum() {
    const [form, setForm] = useState({
        nome: '',
        ano: '',
        preco: '',
        genero: '',
        artista: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Álbum cadastrado:', form)
        // Aqui no futuro você envia para o backend com fetch ou axios
    }

    return (
        <div className="cadastro-container">
            <h2>Cadastro de Álbum</h2>
            <form onSubmit={handleSubmit} className="form-album">
                <label>Nome do Álbum</label>
                <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                />

                <label>Ano de Lançamento</label>
                <input
                    type="text"
                    name="ano"
                    value={form.ano}
                    onChange={handleChange}
                    required
                />

                <label>Preço</label>
                <input
                    type="text"
                    name="preco"
                    value={form.preco}
                    onChange={handleChange}
                    required
                />

                <label>Gênero</label>
                <input
                    type="text"
                    name="genero"
                    value={form.genero}
                    onChange={handleChange}
                    required
                />

                <label>Artista</label>
                <input
                    type="text"
                    name="artista"
                    value={form.artista}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastroAlbum