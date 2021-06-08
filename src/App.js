import Details from "./components/Details";
import HeroCard from "./components/HeroCard";
import NavBar from "./ui/NavBar";

import getSuperheros from "./DB-Functions/getSuperheros";

function App() {

  getSuperheros().forEach(hero => {
    let splited = hero.name.split(/[(|)]/);
    const name = splited[0];
    const character = splited[1];
    console.log(`${name} :> ${character}`);
  });

  return (
    <div className="App">
      <NavBar/>
      <div className="container mt-5">
          <HeroCard
            pathLogo = 'path-logo'
            heroName = 'Nombre Heroe'
            heroCharacter = 'Nombre Personaje'
            biography = 'Biografía'
          />
      </div>
    </div>
  );
}

export default App;
