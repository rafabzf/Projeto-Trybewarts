const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const submiteBtn = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

function validarEmailSenha() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao.addEventListener('click', validarEmailSenha);

function clickDisabled() {
  if (checkbox.checked !== true) {
    submiteBtn.disabled = true;
  } else {
    submiteBtn.disabled = false;
  }
}
checkbox.addEventListener('click', clickDisabled);
