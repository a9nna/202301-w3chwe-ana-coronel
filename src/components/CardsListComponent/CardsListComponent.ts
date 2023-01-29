import { CardComponent } from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import type { PokemonsData, PokemonsList } from "../types.js";

export class CardsListComponent extends Component {
  public pokemonsData: PokemonsData[];
  private readonly url: string;
  private pokemonsList: PokemonsList;

  constructor(
    parentElement: HTMLElement,
    url: string,
    className = "",
    tagName = "div"
  ) {
    super(parentElement, className, tagName);
    this.url = url;
    (async () => this.getAllPokemons(url))();
  }

  async getAllPokemons(url: string): Promise<PokemonsList> {
    const response = await fetch(url);
    this.pokemonsList = (await response.json()) as PokemonsList;
    return this.pokemonsList;
  }

  async render(): Promise<void> {
    super.render();
    await this.getAllPokemons(this.url);
    this.pokemonsData = [];

    for (let i = 0; i < 20; i++) {
      this.pokemonsData.push(this.pokemonsList.results[i]);
    }

    this.domElement.innerHTML = `${this.pokemonsData
      .map(() => '<li class="card-list__pokemon-card pokemon-card"></li>')
      .join("")}`;

    this.domElement
      .querySelectorAll(".pokemon-card")
      .forEach(async (pokemon: HTMLElement, position) => {
        const pokemonCardComponent = new CardComponent(
          pokemon,
          position,
          this.url,
          "pokemon-card_name"
        );
        await pokemonCardComponent.render();
      });
  }
}
