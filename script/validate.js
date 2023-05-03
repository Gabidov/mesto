// Объект для валидации //
const objectForValidate = {
    allforms: document.forms,
    inputErrorClass: 'popup__input_invalid',
    inputSelector: '.popup__input',
    textErrorClass: 'popup__error_avtive',
    activeButtonSelector: '.popup__button-save',
    disableButtonSelector: 'popup__button-save_disable',
    selectorTemplate: '.popup__error_type_'
};

enableValidation(objectForValidate);

 // создал массив из объекта //
function enableValidation(object) {
    const forms = Array.from(object.allforms)
    forms.forEach((form) => {
        const inputList = form.querySelectorAll(object.inputSelector);
        const button = form.querySelector(object.activeButtonSelector);
        handEventListnear(inputList, button, object.selectorTemplate,  object.disableButtonSelector, object.inputErrorClass, object.textErrorClass);
    });
}


// function handEventListnear(inputList, button, selectorTemplate,  disableButtonSelector, inputErrorClass, textErrorClass) {
//     inputList.forEach((input) => {
//         input.addEventListener('input', () => {
//             checkInputValidation(input, selectorTemplate, inputErrorClass, textErrorClass);
//             toggleButton(inputList, button, disableButtonSelector);
//         })
//     })
// }

function checkInputValidation(input, selectorTemplate, inputErrorClass, textErrorClass) {
    const errorText = document.querySelector(`${selectorTemplate}${input.name}`);
    if (input.validity.valid) {
        hideInputError(input, errorText, inputErrorClass, textErrorClass);
    } else {
        showInputError(input, errorText, inputErrorClass, textErrorClass);
    }
}

// function убирающая ошибку в форме
// function hideInputError(input, errorText, inputErrorClass, textErrorClass) {
//     input.classList.remove(inputErrorClass);
//     errorText.textContent = '';
//     errorText.classList.remove(textErrorClass);
//   }
  
// function демонстрирует пользователю ошибку при вводе
//   function showInputError(input, errorText, inputErrorClass, textErrorClass) {
//     input.classList.add(inputErrorClass);
//     errorText.textContent = input.validationMessage;
//     errorText.classList.add(textErrorClass);
//   }

  // function проверяет валидность инпутов + меняет кнопку в зависимости от валидности
  function toggleButton(inputList, button, disableButtonSelector) {
    hasValidInput(inputList) ? disableButton(button, disableButtonSelector) : enableButton(button, disableButtonSelector);
  }

  // function выполняющая возврат валидные св-ва инпутов
  function hasValidInput(inputList) {
    return Array.from(inputList).some((input) => !input.validity.valid)
  }

  // function выполняет роль, чтобы кнопку невозможно было нажать 
  function enableButton(button, disableButtonSelector) {
    button.classList.remove(disableButtonSelector);
    button.disabled = false;
  }

// function меняющая кнопку на не активное состояние
  function disableButton(button, disableButtonSelector) {
    button.classList.add(disableButtonSelector);
    button.disabled = true;
  }

  // function выполняющая роль сброса ошибки при открытии
  function dropErrorForm(form) {
    form.querySelectorAll(objectForValidate.inputSelector).forEach((input) => {
        const errorText = document.querySelector(`${objectForValidate.selectorTemplate}${input.name}`); 
        if (!input.validity.valid) {
        hideInputError(input, errorText, objectForValidate.inputErrorClass, objectForValidate.textErrorClass)
       }
    })
  }