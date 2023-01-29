import Component from "../Component/Component.js";
import type { PokemonsData, PokemonsInfo, PokemonsList } from "../types.js";

export class CardComponent extends Component {
  public pokemonsList: PokemonsList;
  public pokemonInfo: string[];
  public pokemonsData: PokemonsData[];
  public pokemonsUrl: PokemonsInfo;
  public position: number;
  private readonly url: string;
  constructor(
    parentElement: HTMLElement,
    position: number,
    url: string,
    className = "",
    tagName = "div"
  ) {
    super(parentElement, className, tagName);
    this.url = url;
    this.position = position;

    (async () => this.getAllPokemons(url))();
    (async () => this.getPokemonsData())();
    (async () => this.getPokemonsCharacteristics())();
  }

  async getAllPokemons(url: string): Promise<PokemonsList> {
    const response = fetch(url);
    this.pokemonsList = (await (await response).json()) as PokemonsList;
    return this.pokemonsList;
  }

  async getPokemonsData(): Promise<void> {
    await this.getAllPokemons(this.url);
    this.pokemonsData = [];
    this.pokemonInfo = [];

    for (let i = 0; i < 20; i++) {
      this.pokemonsData.push(this.pokemonsList.results[i]);
    }

    for (let i = 0; i < 20; i++) {
      this.pokemonInfo.push(this.pokemonsData[i].url);
    }
  }

  async getPokemonsCharacteristics(): Promise<PokemonsInfo> {
    await this.getPokemonsData();

    const response = fetch(this.pokemonInfo[this.position]);
    this.pokemonsUrl = (await (await response).json()) as PokemonsInfo;
    return this.pokemonsUrl;
  }

  async render(): Promise<void> {
    super.render();
    await this.getPokemonsCharacteristics();

    this.domElement.innerHTML = `<img src="${
      this.pokemonsUrl.sprites.other["official-artwork"].front_default
    }" alt ="Pokemon image" class= "pokemon-card__pokemon-image"/>
      <div class='pokemon-card__card-body card-body'>
        <span class="card-body__pokemon-number">Nº ${this.pokemonsUrl.id}</span>
        <span class="card-body__pokemon-name">${this.pokemonsUrl.name}</span>
        <div class="card-body__type">
          <span>${this.pokemonsUrl.types[0].type.name}</span>
          <span>${
            this.pokemonsUrl.types[1] ? this.pokemonsUrl.types[1].type.name : ""
          }</span>
        </div>
      </div>`;

    this.domElement.addEventListener("click", () => {
      const actualElementList = document.querySelector(".card-list");
      const nextButton = document.querySelector(".button");
      actualElementList.remove();
      nextButton.remove();

      const parentElement = document.querySelector(".root");

      this.domElement.innerHTML = `<span class="card-body__pokemon-number">Nº ${
        this.pokemonsUrl.id
      }</span>
        <span class="card-body__pokemon-name">${
          this.pokemonsUrl.name
        }</span><img src="${
        this.pokemonsUrl.sprites.other["official-artwork"].front_default
      }" alt ="Pokemon image" class="pokemon-card__pokemon-image"/>
      <div>
        <span>Abilities</span>
        <span>${this.pokemonsUrl.abilities[0].ability.name}</span>
        <span>${
          this.pokemonsUrl.abilities[1].ability
            ? this.pokemonsUrl.abilities[1].ability.name
            : ""
        }</span>
      </div>
      <div>
        <span>Stats</span>
        <span>${this.pokemonsUrl.stats[0].stat.name}</span>
        <span>${
          this.pokemonsUrl.stats[1] ? this.pokemonsUrl.stats[1].stat.name : ""
        }</span>
        <span>${
          this.pokemonsUrl.stats[2] ? this.pokemonsUrl.stats[2].stat.name : ""
        }</span>        
        <span>${
          this.pokemonsUrl.stats[3] ? this.pokemonsUrl.stats[3].stat.name : ""
        }</span>        
      <span>${
        this.pokemonsUrl.stats[4] ? this.pokemonsUrl.stats[4].stat.name : ""
      }</span>        
      <span>${
        this.pokemonsUrl.stats[5] ? this.pokemonsUrl.stats[5].stat.name : ""
      }</span>        
      </div>
      `;

      parentElement.appendChild(this.domElement);
    });
  }
}
