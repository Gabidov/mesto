export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._initialCard = items;
        this._renderer = renderer;
    }
    addCardFromArray() {
        this._initialCard.forEach(element => {
            this.addItem(element);
        })
    }
    addItem(data) {
        this._container.prepend(this._renderer(data));
    }
}