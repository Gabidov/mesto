const popupElement = document.querySelector(".popup");
const popupButtonCloseElement = popupElement.querySelector(".popup__button-close");
const popupButtonOpenElement = document.querySelector(".profile__editbutton");
const formElement = document.querySelector(".popup__form");
const nameInputElement = formElement.querySelector(".popup__user");
const jobInputElement = formElement.querySelector(".popup__description"); 
const profileInfoElement = document.querySelector(".profile__info");
const profileDescriptionElement = document.querySelector(".profile__description");

const openPopup = function() {
    popupElement.classList.add("popup_is-open")
    nameInputElement.value = profileInfoElement.textContent;
    jobInputElement.value = profileDescriptionElement.textContent;
};

const closePopup = function() {
    popupElement.classList.remove("popup_is-open")
};

const closePopupByClickOnOverlay = function(event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

popupButtonOpenElement.addEventListener("click", openPopup);
popupButtonCloseElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileInfoElement.textContent = nameInputElement.value;
    profileDescriptionElement.textContent = jobInputElement.value;
    closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);