import Popup from "./Popup.js";

export default class PopupWhithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__openImage');
        this._popupImageDescription = this._popup.querySelector('.popup__descrtion');
    }
    
    open = (cardData) => {
        
        this._popupImage.src = cardData.link;
        this._popupImage.alt = cardData.denotation;
        this._popupImageDescription.textContent = cardData.denotation;
        super.open();
    }
}