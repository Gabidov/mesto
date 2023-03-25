console.log('Hello');

// button like disable
const buttonLikeDisableElement = document.querySelector('.elements__button-like');
const buttonDeleteElement = document.querySelector('.elements__button-delete');

// popups 
const popupEditProfileElement = document.querySelector('.popup_form_editProfile');
const popupAddCardElement = document.querySelector('.popup_form_addCard');
const popupOpenImgElement = document.querySelector('.popup_form_openImg');

// элементы popup в блоке popup form openImg
const ZoomImageElement = popupOpenImgElement.querySelector('.popup__openImage');
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

// Input в form popup блок profile 
const nameInputElement = formElement.querySelector('input[name="user"');
const jobInputElement = formElement.querySelector('input[name="description"');

// Input в form popup addCard
const denotationInputElement = document.querySelector('input[name="denotation"');
const urlInputElement = document.querySelector('input[name="url"');

// текстовые значения в блоке profile 
const profileInfoElement = document.querySelector(".profile__info");
const profileDescriptionElement = document.querySelector(".profile__description");

// скрытая разметка template для добавления карточек 
const templateItemElement = document.querySelector('.template_item').content;
const elementListElement = document.querySelector('.elements__list');

// Массив с картинками
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


// Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// обработчик событий на редактирование профиля
popupButtonOpenElement.addEventListener('click', function () {
  openPopup(popupEditProfileElement);
  // подтягивает данные в input формы
  nameInputElement.value = profileInfoElement.textContent;
  jobInputElement.value = profileDescriptionElement.textContent;
});

// функция отвечающая за редактирование и сохранение полей страницы //
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileInfoElement.textContent = nameInputElement.value;
  profileDescriptionElement.textContent = jobInputElement.value;
  closePopup(popupEditProfileElement);
};

// обработчик событий на редактирование и сохранение полей страницы
formElement.addEventListener('submit', handleFormSubmit);

// обработчик событий на добавление карточки 
buttonOpenAddCardElement.addEventListener('click', function () {
  openPopup(popupAddCardElement);
});

// закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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

// функкция создания карточек 
function createCard(data) {
  const cloneCardElement = templateItemElement.cloneNode(true); // в эту переменную положил клонируемый темплейт  
  const imageElement = cloneCardElement.querySelector('.elements__item');
  const titleElement = cloneCardElement.querySelector('.elements__title');
  titleElement.textContent = data.name;
  imageElement.alt = data.name;
  imageElement.src = data.link;
  // Обработчик событий на лайк к карточке.
  const buttonLikeElement = cloneCardElement.querySelector('.elements__button-like');
  buttonLikeElement.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button-like_active');
  });
  // Обработчик событий на удаление карточки
  cloneCardElement.querySelector('.elements__button-delete').addEventListener('click', function (event) {
    event.target.closest('.elements__card').remove();
  });

  // функция открытия popup с картинкой
  imageElement.addEventListener('click', function () {
    ZoomImageElement.alt = data.name;
    descriptionZoomElement.textContent = data.name;
    ZoomImageElement.src = data.link;
    const showImage = function () {
      popupOpenImgElement.classList.add('popup_opened');
    };
    showImage();
  });
 // Возвращаю получившуюся карточку
  return cloneCardElement;
}

// Добавление карточек в разметку
initialCards.forEach(function (element) {
  const cards = createCard(element);
  elementListElement.append(cards);
});

// Обработчик событий на форме с добавлением карточки 
popupAddCardElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const objectNameUrl = { name: denotationInputElement.value, link: urlInputElement.value };
  elementListElement.prepend(createCard(objectNameUrl));
  event.target.reset();
  closePopup(popupAddCardElement);
});




