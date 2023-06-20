export default class Card {
    constructor(data, selectorTemplate, openImgPopup) {
      this._data = data;
      this._link = data.link;
      this._name = data.denotation;
      this._selectorTemplate = selectorTemplate;
      this._openImgPopup = openImgPopup;
    }
    
    _getCloneTemplate() {
      return document.querySelector(this._selectorTemplate).content.querySelector('.elements__card').cloneNode(true);
    }
  
    _getForLike = () => {  
      this._buttonLikeElement.classList.toggle('elements__button-like_active');
    }
  
    _getForDeleteElement = () => { 
      this._cloneElement.remove();
    }
  
    _getForOpenImgPopup = () => { 
      this._openImgPopup(this._data);
    }
  
    _configEventListener() {
      this._buttonLikeElement.addEventListener('click', this._getForLike);
      this._buttonDeleteElement.addEventListener('click', this._getForDeleteElement);
      this._imageElement.addEventListener('click', this._getForOpenImgPopup);
    }
  
    createCard() {
      this._cloneElement = this._getCloneTemplate();
      this._imageElement = this._cloneElement.querySelector('.elements__item');
      this._titleElement = this._cloneElement.querySelector('.elements__title');
      this._imageElement.src = this._link;
      this._imageElement.alt = `Изображение ${this._name}`;
      this._titleElement.textContent = this._name;
      this._buttonDeleteElement = this._cloneElement.querySelector('.elements__button-delete');
      this._buttonLikeElement = this._cloneElement.querySelector('.elements__button-like');
      this._configEventListener();
      return this._cloneElement;
    }
  }
