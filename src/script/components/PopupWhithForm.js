import Popup from "./Popup.js";


//todo наследуется от Popup для всех остальных popup'ов.
export default class PopupWhithForm extends Popup {
    constructor(popupSelector, functionSubmit) {
        super(popupSelector);
        this._functionSubmit = functionSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input')
    }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._functionSubmit(this._getInputValue())
            this.close();
        })
    }

    _getInputValue() {
        this._value = {};
        this._inputList.forEach(input => {
            this._value[input.name] = input.value;
        })
        return this._value;
    }

    setInputValue(info) {
        this._inputList.forEach(input => {
            input.value = info[input.name];
        });
    }


    close() {
        super.close();
        this._form.reset();
    }
}