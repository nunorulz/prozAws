// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById('username');
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById('username-helper');
let formulario = document.querySelector('#formCadastro');

// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', () => {
  usernameLabel.classList.add('required-popup');
});

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', () => {
  usernameLabel.classList.remove('required-popup');
});

// Validar valor do input

usernameInput.addEventListener('change', (e) => {
  let valor = e.target.value;
  if (valor.length < 3) {
    usernameInput.classList.add('error');
    usernameHelper.classList.add('visible');
    usernameHelper.innerText = 'O nome precisa ter pelo menos 3 letras.';
  } else {
    usernameInput.classList.remove('error');
    usernameInput.classList.add('correct');
    usernameHelper.classList.remove('visible');
    usernameHelper.innerText = '';
  }
});

let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('label[for="username"]');
let emailHelper = document.getElementById('email-helper');

// criando uma função para mostrar e ocultar popup
function mostrarPopup(input, label) {
  input.addEventListener('focus', () => {
    label.classList.add('required-popup');
  });
  // ocultar a mensagem de obrigatoriedade
  input.addEventListener('blur', () => {
    label.classList.remove('required-popup');
  });
}

mostrarPopup(emailInput, emailLabel);

// aplicar a validação ao campo de email
emailInput.addEventListener('change', (e) => {
  let valor = e.target.value;

  // campo de condicional
  if (valor.includes('@') && valor.includes('.com')) {
    emailInput.classList.add('correct');
    emailInput.classList.remove('error');
    emailHelper.classList.remove('visible');
  } else {
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.classList.add('visible');
    emailHelper.innerText =
      "coloque um endereço de email válido, ele deve conter '@' e '.com' ";
  }
});
