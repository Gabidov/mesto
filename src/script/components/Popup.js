export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__button-close');
    }

    _closeWhithEscape = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _сloseButton = () => {
        this.close();
    }

    _сlickOnOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this._сloseButton);
        this._popup.addEventListener('click', this._сlickOnOverlay);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeWhithEscape);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeWhithEscape);
    }
}

