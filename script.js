window.onload = function init () {
  validarEmailSenha;
}

const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');

function validarEmailSenha () {
  if(email.value === 'tryber@teste.com' && senha.value === '123456') 
  alert('Olá, Tryber!'); {
  } alert('Email ou senha inválidos.');
  
}
botao.addEventListener('click' validarEmailSenha);
