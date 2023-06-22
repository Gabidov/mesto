// console.log('Hello, World!');
import './pages/index.css';

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

function makeNewCard(element) {
  const newCard = new Card(element, selectorTemplate, popupImage.open);
   return newCard.createCard();
 } 

 //* экземпляр класса Section с первоначальными картинками и function создании разметки.
const unit = new  Section({
  items: initialCards,
  renderer: (element) => {
    unit.addItem(makeNewCard(element)); 
  }
}, listElementSelector)

unit.addCardFromArray();

//* экземпляр класса PopupWhithForm для form редактирования профиля.
const popupProfile = new PopupWhithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
  popupProfile.close();
})

//* экземпляр класса PopupWhithForm для form добавления картинок
const popupAddCard = new PopupWhithForm(popupAddcardSelector, (data) => {
  unit.addItem(makeNewCard(data));
  popupAddCard.close();
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
