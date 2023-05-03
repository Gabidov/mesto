import initialCards from './const.js';
import Card from './Сard.js';
import FormValidator from './FormValidation.js';

// button like disable 
const buttonLikeDisableElement = document.querySelector('.elements__button-like');
const buttonDeleteElement = document.querySelector('.elements__button-delete');

// popups  
const popupEditProfileElement = document.querySelector('.popup_form_editProfile');
const popupAddCardElement = document.querySelector('.popup_form_addCard');
const popupOpenImgElement = document.querySelector('.popup_form_openImg');

// элементы popup в блоке popup form openImg 
const zoomImageElement = popupOpenImgElement.querySelector('.popup__openImage');
const descriptionZoomElement = popupOpenImgElement.querySelector('.popup__descrtion');

// button закрытие popup 
const buttonCloseProfileEditElement = document.querySelector('button[name=buttonCloseEditProfile');
const buttonCloseAddCardElement = document.querySelector('button[name=buttonCloseAddCard');
const buttonCloseOpenImgElement = document.querySelector('button[name=buttonCloseOpenImg');

// button открытия popup 
const popupButtonOpenElement = document.querySelector('.profile__edit-button');
const buttonOpenAddCardElement = document.querySelector('.profile__add-button');

// Выбор элемента формы 
const formElement = document.querySelector(".popup__form");

//! выбор формы доьавления карточки
const formAddCard = document.querySelector('form[name=addPhoto]');

//! выбор формы доьавления карточки
const formEditProfile = document.querySelector('form[edit-profile]');

// Input в form popup блок profile  
const nameInputElement = formElement.querySelector('input[name="user"');
const jobInputElement = formElement.querySelector('input[name="description"');

// Input в form popup addCard + // для валидации при открытии попапа 
const denotationInputElement = document.querySelector('input[name="denotation"');
const urlInputElement = document.querySelector('input[name="url"');

// текстовые значения в блоке profile  
const profileInfoElement = document.querySelector(".profile__info");
const profileDescriptionElement = document.querySelector(".profile__description");

// скрытая разметка template для добавления карточек  
const templateItemElement = document.querySelector('.template_item').content;
const elementListElement = document.querySelector('.elements__list');

// переменные для валидации при открытии попапа 
const buttonSubmitFormEditProfileElement = formElement.querySelector('.popup__button-save');
const inputFormEditProfileElement = formElement.querySelector('.popup__input');

const formAddPhotoElement = document.querySelector('#formAddPhoto')
const buttonSubmitAddCardElement = formAddPhotoElement.querySelector('.popup__button-save');
const inputFormAddCardElement = formAddPhotoElement.querySelectorAll('.popup__input');


const selectorTemplate = '#cardElement';
// const formPersonalDataElement = document.forms.personalData;


// Открытие popup 
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

// Открытие popup c добавлением карточек в разметку
buttonOpenAddCardElement.addEventListener('click', () => {
  formAddCard.reset();
  openPopup(popupAddCardElement);
})

// закрытие popup 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

// function закрытия попапо по нажатию кнопки esc 
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

// function закрытия попапо по нажатию на overlay 
const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup(event.currentTarget);
};
popupEditProfileElement.addEventListener('click', closePopupByClickOnOverlay);
popupAddCardElement.addEventListener('click', closePopupByClickOnOverlay);
popupOpenImgElement.addEventListener('click', closePopupByClickOnOverlay);


//! обработчик событий на редактирование профиля 
popupButtonOpenElement.addEventListener('click', function () {
  // formEditProfile.reset()
  // formPersonalDataValidation.resetErrorForOpenElement();
  nameInputElement.value = profileInfoElement.textContent;
  jobInputElement.value = profileDescriptionElement.textContent;
  openPopup(popupEditProfileElement);
});

//! обработчик событий на добавление карточки  
buttonOpenAddCardElement.addEventListener('click', function () { 
  formAddPhotoElement.reset(); 
  formAddCardValidation.resetErrorForOpenElement();
  openPopup(popupAddCardElement); 
});

// функция отвечающая за редактирование и сохранение полей страницы // 
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInfoElement.textContent = nameInputElement.value;
  profileDescriptionElement.textContent = jobInputElement.value;
  closePopup(popupEditProfileElement);
};
// обработчик событий на редактирование и сохранение полей страницы 
formElement.addEventListener('submit', handleProfileFormSubmit);

// обработчик событий на добавление карточки 
buttonCloseProfileEditElement.addEventListener('click', function () {
  closePopup(popupEditProfileElement);
});

// обработчик событий на добавление карточки 
buttonCloseAddCardElement.addEventListener('click', function () {
  closePopup(popupAddCardElement);
});

buttonCloseOpenImgElement.addEventListener('click', function () {
  closePopup(popupOpenImgElement);
});

// функция открытия popup с картинкой 
function openImgPopup(data) {
  zoomImageElement.alt = data.name;
  descriptionZoomElement.textContent = data.name;
  zoomImageElement.src = data.link;
  openPopup(popupOpenImgElement);
}


function makeNewCard(element) {
  const cards = new Card(element, selectorTemplate, openImgPopup);
  const cardElement = cards.createCard();
  return cardElement;
}

function addCardContainer(container, card) {
  container.append(card);
}
// Добавление карточек в разметку 
initialCards.forEach(function (element) {
  addCardContainer(elementListElement, makeNewCard(element));
});

// * function и бработчик событий на форму с добавлением карточки
function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const cardData = { name: denotationInputElement.value, link: urlInputElement.value };
  elementListElement.prepend(makeNewCard(cardData));
  evt.target.reset();
  closePopup(popupAddCardElement);
}

formAddCard.addEventListener('submit', handleFormCardSubmit);

const objectForValidate = {
  inputErrorClass: 'popup__input_invalid',
  inputSelector: '.popup__input',
  textErrorClass: 'popup__error_avtive',
  activeButtonSelector: '.popup__button-save',
  disableButtonSelector: 'popup__button-save_disable',
  selectorTemplate: '.popup__error_type_',
};

const formPersonalDataValidation = new FormValidator(objectForValidate, formElement)
formPersonalDataValidation.enableValidation();

const formAddCardValidation = new FormValidator(objectForValidate, formElement)
formAddCardValidation.enableValidation();