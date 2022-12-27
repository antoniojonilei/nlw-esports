import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";

import dbfz from "./assets/img/dragon-ball-fighterz.jpg"
import ssbu from "./assets/img/smash-bros-ultimate.jpg"
import grid from "./assets/img/grid-autosport.jpg"
import sfv from "./assets/img/street-fighter.jpg"

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/Dragon%20Ball%20FighterZ",
    imageUrl: dbfz,
    alt: "Imagem do jogo Dragon Ball FighterZ"
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
  } 
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus Jogos" subtitle="Os games que eu mais curto jogar!">

          {gamesListData.map((item) => (
            <ListItem 
              url={item.url} 
              imageUrl={item.imageUrl} 
              alt={item.alt}
            />
          ))}       

        </Section>  
        
       <Section 
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
        />
        
      </main>
    </div>
  );
}

export default App;
