let inputError = document.querySelector('.error');
inputError.classList.remove('error');

let inputCorrect = document.querySelector('.correct');
inputCorrect.classList.remove('correct');

let visible = document.querySelector('.visible');
visible.classList.remove('visible');

let subt = document.querySelector('h2');
subt.style.fontSize = '30px';
subt.style.color = '#1e293b';

let btnForm = document.querySelector('button');
btnForm.style.color = '#ffffff';
btnForm.style.backgroundColor = '#1e293b';
btnForm.style.borderRadius = '5px';
btnForm.style.border = '2px solid #1e3a8a'

let userInput = document.querySelector('#login-usuario')
userInput.classList.add('correct')

let passInput = document.querySelector('#login-senha')
passInput.classList.add('error')

let msgErro = document.querySelectorAll('p')[1]
msgErro.classList.add('visible')

// let userInput = document.querySelector('#login-usuario')
// userInput.classList.add('error')

// let passInput = document.querySelector('#login-senha')
// passInput.classList.add('correct')

// let msgErro = document.querySelectorAll('p')[0]
// msgErro.classList.add('visible')
