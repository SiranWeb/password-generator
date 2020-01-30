// elements
const passLengthRange           = document.querySelector('#passLengthRange');
const numbersCheckbox           = document.querySelector('#numbersCheckbox');
const lettersCheckbox           = document.querySelector('#lettersCheckbox');
const differentCaseCheckbox     = document.querySelector('#differentCaseCheckbox');
const specialSymbolsCheckbox    = document.querySelector('#specialSymbolsCheckbox');
const specialSymbolsTextarea    = document.querySelector('#specialSymbolsTextarea');

numbersCheckbox.checked = true;
lettersCheckbox.checked = true;

const letters   = 'qwertyuiopasdfghjklzxcvbnm';
const nums      = '1234567890';

function generatePassword() {
    let password = '';
    let symbols = [];
    const symbolsAmount = passLengthRange.value;
    if (numbersCheckbox.checked) {
        symbols.push(...nums.split(''));
    }
    if (lettersCheckbox.checked) {
        symbols.push(...letters.split(''));
    }
    

    for (let i = 0; i < symbolsAmount; i++) {
        const random = Math.floor(Math.random() * (symbols.length - 1));
        password += symbols[random];
    }
    console.log(symbols);
    return password;
};

generatePassword();