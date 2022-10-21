import { Header } from './components/Header/Header'
import { Section } from './components/Section/Section'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus jogos" subtitle="Os games que eu mais curto jogar!" />
        <Section title="Canais e streamers" subtitle="Lista de canais e transmissões que não perco!" />
      </main>
    </div>
  )
}

export default App
