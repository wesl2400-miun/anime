
export class Anime {
  constructor() {
    this._animes = [];
  }

  add = (node, aniClass) => {
    this._animes.push(() => {
      node.classList
        .remove(aniClass);
      node.offsetWidth;
      node.classList
        .add(aniClass);
    })
  }

  wire = (button) => {
    button.addEventListener(
      'click', () => {
      this._animes.forEach(
        anime => anime());
    });
  }
}