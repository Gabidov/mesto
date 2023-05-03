export default class Card {
    constructor(data, selectorTemplate, openImgPopup) {
      this._data = data;
      this._link = data.link;
      this._name = data.name;
      this._selectorTemplate = selectorTemplate;
      this._openImgPopup = openImgPopup;
    }
    
    _receiveCloneTemplate() {
      return document.querySelector(this._selectorTemplate).content.querySelector('.elements__card').cloneNode(true);
    }
  
    _configForLike = () => {  // _handleLike //
      this._buttonLikeElement.classList.toggle('elements__button-like_active');
    }
  
    _configForDeleteElement = () => { // _handleDeleteElement //
      this._cloneElement.remove();
    }
  
    _configForOpenImgPopup = () => { // _handleOpenImgInPopup // 
      this._openImgPopup(this._data);
    }
  
    _configEventListener() { //! setEventListner //
      this._buttonLikeElement.addEventListener('click', this._configForLike);
      this._buttonDeleteElement.addEventListener('click', this._configForDeleteElement);
      this._imageElement.addEventListener('click', this._configForOpenImgPopup);
    }
  
    createCard() {
      this._cloneElement = this._receiveCloneTemplate();
      this._imageElement = this._cloneElement.querySelector('.elements__item');
      this._titleElement = this._cloneElement.querySelector('.elements__title');
      this._imageElement.src = this._link;
      this._imageElement.alt = this._name;
      this._titleElement.textContent = this._name;
      this._buttonDeleteElement = this._cloneElement.querySelector('.elements__button-delete');
      this._buttonLikeElement = this._cloneElement.querySelector('.elements__button-like');
      this._configEventListener();
      return this._cloneElement;
    }
  }
