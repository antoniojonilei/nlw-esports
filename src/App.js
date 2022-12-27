import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";

import dbfz from "./assets/img/dragon-ball-fighterz.jpg"
import ssbu from "./assets/img/smash-bros-ultimate.jpg"
import grid from "./assets/img/grid-autosport.jpg"
import sfv from "./assets/img/street-fighter.jpg"
import splatoon from "./assets/img/splatoon3.jpg"

import dude from "./assets/img/dude.png"
import ryoran from "./assets/img/ryoran.png"
import vgbc from "./assets/img/vgbootcamp.png"

import insta from "./assets/svgs/instagram.svg"
import twitch from "./assets/svgs/twitch.svg"

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/Splatoon%203",
    imageUrl: splatoon,
    alt: "Imagem do jogo Splatoon 3" 
  },
  {
    url: "https://www.twitch.tv/directory/game/Super%20Smash%20Bros.%20Ultimate",
    imageUrl: ssbu,
    alt: "Imagem do jogo Super Smash Bros Ultimate"
  },
  {    
    url: "https://www.twitch.tv/directory/game/GRID%3A%20Autosport",
    imageUrl: grid,
    alt: "Imagem do jogo Grid AutoSport"
  },
  {
    url: "https://www.twitch.tv/directory/game/Street%20Fighter%20V",
    imageUrl: sfv,
    alt: "Imagem do jogo Street Fighter V" 
  }, 
  {
    url: "https://www.twitch.tv/directory/game/Dragon%20Ball%20FighterZ",
    imageUrl: dbfz,
    alt: "Imagem do jogo Dragon Ball FighterZ"
  }
]

const channelListData = [
  {
    url: "https://www.twitch.tv/thatsrb2dude",
    imageUrl: dude,
    alt: "Imagem do Canal Dude" 
  },
  {
    url: "https://www.twitch.tv/ryoran",
    imageUrl: ryoran,
    alt: "Imagem do Canal Ryoran" 
  },
  {
    url: "https://www.twitch.tv/vgbootcamp",
    imageUrl: vgbc,
    alt: "Imagem do Canal VGBootCamp" 
  }
]

const socialListData = [
  {
    url: "https://www.instagram.com/jonileisilva/",
    imageUrl: insta
  },
  {
    url: "https://www.twitch.tv/jonileisilva",
    imageUrl: twitch
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section 
          className="games-list" 
          title="Meus Jogos" 
          subtitle="Os games que eu mais curto jogar com os amigos!"
        >

          {gamesListData.map((item) => (
            <ListItem 
              url={item.url} 
              imageUrl={item.imageUrl} 
              alt={item.alt}
            />
          ))}       

        </Section>  
        
       <Section 
          className="channel-list"
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
        >

          {channelListData.map((item) => (
            <ListItem 
            url={item.url} 
            imageUrl={item.imageUrl} 
            alt={item.alt}
            />
          ))}

        </Section>

        <Section
          title="Minhas Redes"
          subtitle="Se conecte comigo!"
          className="social-list"
        >
          {socialListData.map((item) => (
            <ListItem 
              url={item.url}
              imageUrl={item.imageUrl}
              
            />
          ))}
        </Section>
        
      </main>
    </div>
  );
}

export default App;
