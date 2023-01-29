import { rootElement } from "../../index.js";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent.js";
import { CardsListComponent } from "../CardsListComponent/CardsListComponent.js";
import type { PokemonsList } from "../types.js";

export class ButtonNextPage extends ButtonComponent {
  public pokemonList: PokemonsList;
  url: string;
  constructor(
    parentElement: HTMLElement,
    url: string,
    className = "",
    tag = "a"
  ) {
    super(parentElement, className, tag);
    this.url = url;
    (async () => this.getAllPokemons(this.url))();
  }

  async getAllPokemons(url: string): Promise<PokemonsList> {
    const response = await fetch(url);
    this.pokemonList = (await response.json()) as PokemonsList;
    return this.pokemonList;
  }

  async render() {
    super.render();
    this.anchorElement.textContent = "Next";
    await this.getAllPokemons(this.url);

    this.anchorElement.addEventListener("click", async () => {
      await this.getAllPokemons(this.pokemonList.next);

      const actualElementList = document.querySelector(".card-list");
      actualElementList.remove();

      const newCardsListComponent = new CardsListComponent(
        rootElement,
        this.pokemonList.next,
        "card-list",
        "ul"
      );

      await newCardsListComponent.render();
    });
  }
}
