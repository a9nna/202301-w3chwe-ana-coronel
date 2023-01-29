import { ButtonNextPage } from "./components/ButtonNextPage/ButtonNextPage.js";
import { CardsListComponent } from "./components/CardsListComponent/CardsListComponent.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";

export const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const rootElement: HTMLElement = document.querySelector(".root");
const headerComponent = new HeaderComponent(rootElement, "header");
headerComponent.render();

const buttonNext = new ButtonNextPage(rootElement, pokemonApiUrl, "button");
await buttonNext.render();

export const cardsListComponent = new CardsListComponent(
  rootElement,
  pokemonApiUrl,
  "card-list",
  "ul"
);
await cardsListComponent.render();
