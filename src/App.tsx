import { Header } from './components/Header/Header'
import { ListItem } from './components/ListItem/ListItem'
import { Section } from './components/Section/Section'

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg',
    alt: 'Imagem do jogo League of Legends'
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg',
    alt: 'Imagem do jogo Valorant'
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg',
    alt: 'Imagem do jogo Minecraft'
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg',
    alt: 'Imagem do jogo TFT'
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus jogos" subtitle="Os games que eu mais curto jogar!">
          {gamesListData.map((game) => {
            return(
              <ListItem url={game.url} imageUrl={game.imageUrl} alt={game.alt}/>
            )
          })}
        </Section>
        <Section title="Canais e streamers" subtitle="Lista de canais e transmissões que não perco!" />
      </main>
    </div>
  )
}

export default App
