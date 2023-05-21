// Массив с картинками
const initialCards = [
  {
    denotation: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    denotation: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    denotation: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    denotation: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    denotation: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    denotation: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popupButtonOpenElement = document.querySelector('.profile__edit-button');
const buttonOpenAddCardElement = document.querySelector('.profile__add-button');

const selectorTemplate = '#cardElement';
const popupProfileSelector = '.popup_form_editProfile';
const popupAddcardSelector = '.popup_form_addCard'
const popupImageSelector = '.popup_form_openImg';
const listElementSelector = '.elements__list';


const configInfo = {
  profileInfoSelector: '.profile__info',
  profileDescriptionSelector: '.profile__description',
}

//! object для валидации 
const objectForValidate = { 
  inputErrorClass: 'popup__input_invalid', 
  inputSelector: '.popup__input', 
  textErrorClass: 'popup__error_avtive', 
  activeButtonSelector: '.popup__button-save', 
  disableButtonSelector: 'popup__button-save_disable', 
  selectorTemplate: '.popup__error_type_', 
}; 

const validatorForm = {};

export {
  initialCards,
  popupButtonOpenElement,
  buttonOpenAddCardElement,
  selectorTemplate,
  popupProfileSelector,
  popupAddcardSelector,
  popupImageSelector,
  listElementSelector,
  configInfo,
  objectForValidate,
  validatorForm
}
