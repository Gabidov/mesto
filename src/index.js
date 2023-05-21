// console.log('Hello, World!');

import {
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
} from './script/utils/const.js'; 

import Card from './script/components/Сard.js'; 
import FormValidator from './script/components/FormValidation.js'; 
import PopupWhithImage from './script/components/PopupWithImage.js';
import Section from './script/components/Section.js';
import UserInfo from './script/components/UserInfo.js';
import PopupWhithForm from './script/components/PopupWhithForm.js';

const userInfo = new UserInfo(configInfo);
const popupImage = new PopupWhithImage(popupImageSelector);

//* экзепляры класса FormValidator и воспроизведение их валидации.
Array.from(document.forms).forEach(item => {
  const form = new FormValidator(objectForValidate, item);
  const name = item.name;
  validatorForm[name] = form;
  form.enableValidation();
})


 //* экземпляр класса Section с первоначальными картинками и function создании разметки.
const unit = new  Section({
  items: initialCards,
  renderer: (element) => {
    const cards = new Card(element, selectorTemplate, popupImage.open);
    return cards.createCard(); 
  }
}, listElementSelector)
unit.addCardFromArray();

//* экземпляр класса PopupWhithForm для form редактирования профиля.
const popupProfile = new PopupWhithForm(popupProfileSelector, (info) => {
  userInfo.setUserInfo(info);
})

//* экземпляр класса PopupWhithForm для form добавления картинок
const popupAddCard = new PopupWhithForm(popupAddcardSelector, (info) => {
  unit.addItem(info);
})

//? слушатели клика на каждый popup (крестик, оверлей).
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();

//? обработчик событий на редактирование профиля.
popupButtonOpenElement.addEventListener('click', function () { 
  validatorForm.editProfile.dropErrorForm();
  popupProfile.setInputValue(userInfo.getUserInfo()); 
  popupProfile.open(); 
}); 

 
//? обработчик событий на добавление карточки.  
buttonOpenAddCardElement.addEventListener('click', function () {    
  validatorForm.addPhoto.dropErrorForm(); 
  popupAddCard.open();  
}); 
