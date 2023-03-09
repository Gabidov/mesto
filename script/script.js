const popupElement = document.querySelector(".popup");
const popupButtonCloseElement = popupElement.querySelector(".popup__button-close");
const popupButtonOpenElement = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__form");
const nameInputElement = formElement.querySelector('input[name="user"');
const jobInputElement = formElement.querySelector('input[name="description"');
const profileInfoElement = document.querySelector(".profile__info");
const profileDescriptionElement = document.querySelector(".profile__description");

// функция отвечающая за открытие модального окна и подтягивающая данные в поля //
const openPopup = function() {
    popupElement.classList.add("popup_is-opened")
    nameInputElement.value = profileInfoElement.textContent;
    jobInputElement.value = profileDescriptionElement.textContent;
};

// функция отвечающая за закрытие модального окна //
const closePopup = function() {
    popupElement.classList.remove("popup_is-opened")
};

// функция отвечающая за редактирование полей страницы //
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileInfoElement.textContent = nameInputElement.value;
    profileDescriptionElement.textContent = jobInputElement.value;
    closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);
popupButtonOpenElement.addEventListener("click", openPopup);
popupButtonCloseElement.addEventListener("click", closePopup);