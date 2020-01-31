const passLengthRange           = document.querySelector('#passLengthRange');
const numbersCheckbox           = document.querySelector('#numbersCheckbox');
const lettersCheckbox           = document.querySelector('#lettersCheckbox');
const differentCaseCheckbox     = document.querySelector('#differentCaseCheckbox');
const specialSymbolsCheckbox    = document.querySelector('#specialSymbolsCheckbox');
const specialSymbolsTextarea    = document.querySelector('#specialSymbolsTextarea');
const passOutput                = document.querySelector('#passOutput');
const getPasswordsBtn           = document.querySelector('#getPasswords');

getPasswordsBtn.addEventListener('click', getPasswords);

numbersCheckbox.checked = true;
lettersCheckbox.checked = true;
differentCaseCheckbox.checked = false;
specialSymbolsTextarea.checked = false;
specialSymbolsTextarea.value = '@#!%$_';

const passwordsAmount       = 1;
const lettersGroup          = 'qwertyuiopasdfghjklzxcvbnm';
const numbersGroup          = '1234567890';

function generatePassword() {
    let password = '';
    let symbolsGroup = [];
    let specialGroup = specialSymbolsTextarea.value;
    const symbolsAmount = passLengthRange.value;

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
        const randomElementPosition = Math.floor(Math.random() * (symbolsGroup.length - 1));
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
    passOutput.innerHTML = '';
    for (let i = 0; i < passwordsAmount; i++) {
        const password = document.createElement('p');
        password.classList.add('password');
        password.innerText = generatePassword();
        passOutput.append(password);
    }
};
