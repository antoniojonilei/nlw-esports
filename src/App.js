import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";

import dbfz from "./assets/img/dragon-ball-fighterz.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus Jogos" subtitle="Os games que eu mais curto jogar!">

          <ListItem url="https://www.twitch.tv/directory/game/League%20of%20Legends" imageUrl={dbfz} alt="Imagem do jogo League of Legends"/>

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
