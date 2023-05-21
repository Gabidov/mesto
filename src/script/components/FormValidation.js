export default

  class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._activeButtonSelector = config.activeButtonSelector;
    this._selectorTemplate = config.selectorTemplate;
    this._disableButtonSelector = config.disableButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
    this._button = form.querySelector(this._activeButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);
  }

  _hideInputError(errorTextElement, input) {
    input.classList.remove(this._inputErrorClass);
    errorTextElement.textContent = '';  
  }

  _showInputError(errorTextElement, input) {
    input.classList.add(this._inputErrorClass);
    errorTextElement.textContent = input.validationMessage;
  }

  _cfgForVerifyInputValidation(input) { 
    const errorTextElement = this._form.querySelector(`${this._selectorTemplate}${input.name}`);  
    if (input.validity.valid) {
      this._hideInputError(errorTextElement, input);
    } else { 
      this._showInputError(errorTextElement, input);
    }
  }

  _enableButton() {
    this._button.classList.remove(this._disableButtonSelector);
    this._button.disabled = false;
  }

  _disableButton() {
    this._button.classList.add(this._disableButtonSelector);
    this._button.disabled = true;
  } 

  _hasValidInput() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  _toggleButton() {
    if (this._hasValidInput()) {
      this._disableButton(this._button);
    } else {
      this._enableButton();
    }  
  }


  _configEventListener() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._cfgForVerifyInputValidation(input);
        this._toggleButton();
        
      })
    })
  }

  enableValidation() {
    this._configEventListener()
  }

  dropErrorForm() { 
    this._inputList.forEach(input => {
      const errorTextElement = this._form.querySelector(`${this._selectorTemplate}${input.name}`);
      if (!input.validity.valid) {
        this._hideInputError(errorTextElement, input);
      }
    })
    this._disableButton()
  }
}

