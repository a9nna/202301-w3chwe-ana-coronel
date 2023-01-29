import { CardsListComponent } from "./components/CardsListComponent/CardsListComponent.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";

const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon/";

const rootElement: HTMLElement = document.querySelector(".root");
const headerComponent = new HeaderComponent(rootElement, "header");
headerComponent.render();

const cardsListComponent = new CardsListComponent(
  headerComponent.domElement,
  pokemonApiUrl,
  "card-list",
  "ul"
);
await cardsListComponent.render();
