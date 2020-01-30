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

const amount    = 1;
const letters   = 'qwertyuiopasdfghjklzxcvbnm';
const nums      = '1234567890';

function generatePassword() {
    let password = '';
    let symbols = [];
    let special = specialSymbolsTextarea.value;
    const symbolsAmount = passLengthRange.value;

    if (numbersCheckbox.checked) {
        symbols.push(...nums.split(''));
    }
    if (lettersCheckbox.checked) {
        symbols.push(...letters.split(''));
    }
    if (specialSymbolsCheckbox.checked) {
        symbols.push(...special.split(''));
    }
    
    for (let i = 0; i < symbolsAmount; i++) {
        const randomElement = Math.floor(Math.random() * (symbols.length - 1));
        const randomSymbol = symbols[randomElement];
        if (differentCaseCheckbox.checked) {
            passElem = Math.round(Math.random()) ? randomSymbol : randomSymbol.toUpperCase();
        } else {
            passElem = randomSymbol;
        }
        
        password += passElem;
    }
    console.log(symbols);
    return password;
};

function getPasswords() {
    passOutput.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const pass = document.createElement('p');
        pass.classList.add('password');
        pass.innerText = generatePassword();
        passOutput.append(pass);
    }
};
