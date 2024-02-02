const passwordInput = document.getElementById('password');
const conditions = document.getElementById('conditions');
const submitButton = document.getElementById('submit');

const atLeastOneLetter = new RegExp('[a-z]')
const atLeastOneCapitalLetter = new RegExp('[A-Z]')
const atLeastOneNumber = new RegExp('[0-9]')
const atLeastOneSpecialCaracter = new RegExp('[!@#$%\^&*)(+=._-]')

passwordInput.addEventListener('keyup', () => {
    

    if (passwordInput.value.match(atLeastOneLetter)) {
        validConditions(conditions.children[0]) 
    } else { invalidConditions(conditions.children[0])}

    if (passwordInput.value.match(atLeastOneCapitalLetter)) {
        validConditions(conditions.children[1]) 
    } else { invalidConditions(conditions.children[1])}

    if (passwordInput.value.match(atLeastOneNumber)) {
        validConditions(conditions.children[2]) 
    } else { invalidConditions(conditions.children[2])}

    if (passwordInput.value.length >= 8) {
        validConditions(conditions.children[3]) 
    } else { invalidConditions(conditions.children[3])}

    if (passwordInput.value.match(atLeastOneSpecialCaracter)) {
        validConditions(conditions.children[4]) 
    } else { invalidConditions(conditions.children[4])}
    
    if (conditions.children[0].classList.contains('valid')
    && conditions.children[1].classList.contains('valid')
    && conditions.children[2].classList.contains('valid')
    && conditions.children[3].classList.contains('valid')
    && conditions.children[4].classList.contains('valid')) {
        submitButton.removeAttribute('disabled')
    } else {
        submitButton.setAttribute('disabled', '')
    }
});

function validConditions(condition) {
    condition.classList.add('valid');
    condition.children[0].setAttribute('src', './svg/valid.svg')
}

function invalidConditions(condition) {
    condition.classList.remove('valid');
    condition.children[0].setAttribute('src', './svg/invalid.svg')
}

