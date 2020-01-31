const passwordLengthRange       = document.querySelector('#passwordLengthRange');
const numbersCheckbox           = document.querySelector('#numbersCheckbox');
const lettersCheckbox           = document.querySelector('#lettersCheckbox');
const differentCaseCheckbox     = document.querySelector('#differentCaseCheckbox');
const specialSymbolsCheckbox    = document.querySelector('#specialSymbolsCheckbox');
const specialSymbolsTextarea    = document.querySelector('#specialSymbolsTextarea');
const passwordOutput            = document.querySelector('#passwordOutput');
const getPasswordsBtn           = document.querySelector('#getPasswords');
const passwordAmountRange       = document.querySelector('#passwordAmountRange');
getPasswordsBtn.addEventListener('click', getPasswords);

numbersCheckbox.checked = true;
lettersCheckbox.checked = true;
differentCaseCheckbox.checked = false;
specialSymbolsTextarea.checked = false;
specialSymbolsTextarea.value = '@#!%$_';

const lettersGroup          = 'qwertyuiopasdfghjklzxcvbnm';
const numbersGroup          = '1234567890';

function generatePassword() {
    let password = '';
    let symbolsGroup = [];
    let specialGroup = specialSymbolsTextarea.value;
    const symbolsAmount = passwordLengthRange.value;

    if (numbersCheckbox.checked) {
        symbolsGroup.push(...numbersGroup.split(''));
    }
    if (lettersCheckbox.checked) {
        symbolsGroup.push(...lettersGroup.split(''));
    }
    if (specialSymbolsCheckbox.checked) {
        symbolsGroup.push(...specialGroup.split(''));
    }
    
    for (let i = 0; i < symbolsAmount; i++) {
        let passwordElement = null;
        const randomElementPosition = Math.floor(Math.random() * (symbolsGroup.length));
        const randomSymbol = symbolsGroup[randomElementPosition];
        if (differentCaseCheckbox.checked) {
            passwordElement = Math.round(Math.random()) ? randomSymbol : randomSymbol.toUpperCase();
        } else {
            passwordElement = randomSymbol;
        }
        
        password += passwordElement;
    }
    console.log(symbolsGroup);
    return password;
};

function getPasswords() {
    const passwordsAmount = passwordAmountRange.value;
    passwordOutput.innerHTML = '';
    for (let i = 0; i < passwordsAmount; i++) {
        const password = document.createElement('p');
        password.classList.add('password');
        password.innerText = generatePassword();
        passwordOutput.append(password);
    }
};
