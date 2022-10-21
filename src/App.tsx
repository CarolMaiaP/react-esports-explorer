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

const channelsListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png",
    alt: "Imagem de Cellbit"
  }
]

const socialListData = [
  {
    url: "https://www.instagram.com/carol_maia.9/",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram de Caroline Maia"
  },
  {
    url: "https://www.youtube.com/channel/UCETTMEOi0H1I1N5SkdYeJQQ",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube de Caroline Maia"
  },
  
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus jogos" subtitle="Os games que eu mais curto jogar!">
          {gamesListData.map((game) => {
            return(
              <ListItem className="games-list" url={game.url} imageUrl={game.imageUrl} alt={game.alt}/>
            )
          })}
        </Section>
        <Section title="Canais e streamers" subtitle="Lista de canais e transmissões que não perco!">
          {channelsListData.map((channel) => {
              return (
                <ListItem url={channel.url} imageUrl={channel.imageUrl} alt={channel.alt}/>
              )
          })}
        </Section>
        <Section title="Minhas redes" subtitle="Se conecte comigo agora mesmo!">
          {socialListData.map((social) => {
            return (
              <ListItem url={social.url} imageUrl={social.imageUrl} alt={social.alt}/>
            )
          })}
        </Section>
      </main>
    </div>
  )
}

export default App
