import Component from "./Component";

describe("Given a Component component", () => {
  describe("When it's rendered with a p tag", () => {
    test("Then it should show a p on the screen", () => {
      const screen = document.createElement("div");
      const tag = "p";

      const paragraphComponent = new Component(screen, "", tag);
      paragraphComponent.render();

      const paragraph = screen.querySelector(tag);

      expect(paragraph).not.toBeNull();
    });
  });
});
