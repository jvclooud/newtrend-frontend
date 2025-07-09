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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8080/albuns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titulo: form.nome,
                    ano_lancamento: form.ano,
                    preco: form.preco,
                    genero: form.genero,
                    artista: form.artista
                })
            });
            if (response.ok) {
                alert('Álbum cadastrado com sucesso!');
            } else {
                alert('Erro ao cadastrar álbum.');
            }
        } catch (error) {
            alert('Erro ao conectar com o servidor.');
        }
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