import type { ButtonStructure } from "../types.js";

export class ButtonComponent implements ButtonStructure {
  anchorElement: HTMLAnchorElement;

  constructor(
    private readonly parentElement: HTMLElement,
    className = "",
    tag = "a"
  ) {
    this.anchorElement = document.createElement(tag) as HTMLAnchorElement;
    this.anchorElement.className = className;
  }

  render() {
    this.parentElement.appendChild(this.anchorElement);
  }
}
