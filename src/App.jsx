import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [catImage, setCatImage] = useState('https://cataas.com/cat')
  const [catFact, setCatFact] = useState('Carregando curiosidade...')

  const fetchNewCat = async () => {
    try {
      setCatImage(`https://cataas.com/cat?${Date.now()}`)
    } catch (error) {
      console.error('Erro ao buscar gato:', error)
    }
  }

  const fetchCatFact = async () => {
    try {
      setCatFact('Carregando curiosidade...')
      const response = await fetch('https://meowfacts.herokuapp.com/')
      const data = await response.json()
      setCatFact(data.data[0])
    } catch (error) {
      setCatFact('Erro ao carregar curiosidade.')
      console.error('Erro na API:', error)
    }
  }

  useEffect(() => {
    fetchCatFact()
  }, [])

  return (
    <div className="cat-container">
      <h1>🐱 Tudo sobre gatos!</h1>
      
      <section className="cat-section">
        <h2>Gato Aleatório</h2>
        <div className="cat-image-container">
          <img src={catImage} alt="Gato aleatório" className="cat-image" />
        </div>
        <button onClick={fetchNewCat} className="btn-primary">
          Novo Gato 🐱
        </button>
      </section>

      <section className="cat-section">
        <h2>Curiosidades sobre gatos</h2>
        <div className="fact-container">
          <p className="cat-fact">{catFact}</p>
        </div>
        <button onClick={fetchCatFact} className="btn-primary">
          Nova Curiosidade 📚
        </button>
      </section>
    </div>
  )
}

export default App
