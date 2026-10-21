document.addEventListener('DOMContentLoaded', () => {
  const register = document.querySelector('#register-form');
  if (register) register.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(register);
    const profile = { name: data.get('name').trim(), email: data.get('email').trim(), phone: data.get('phone').trim() };
    // Simulação de protótipo: não armazena nem envia a senha.
    sessionStorage.setItem('helpeopleProfile', JSON.stringify(profile));
    alert('Cadastro de demonstração concluído! Você será direcionado(a) para o início.');
    window.location.href = 'inicio.html';
  });
  const login = document.querySelector('#login-form');
  if (login) login.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value.trim();
    const existing = JSON.parse(sessionStorage.getItem('helpeopleProfile') || 'null');
    if (existing && existing.email.toLowerCase() !== email.toLowerCase()) {
      alert('Este protótipo só reconhece o e-mail cadastrado nesta sessão. Você pode continuar sem login ou cadastrar novamente.');
      return;
    }
    if (!existing) sessionStorage.setItem('helpeopleProfile', JSON.stringify({name:'Professor(a) Exemplo', email, phone:''}));
    alert('Login de demonstração realizado.');
    window.location.href = 'inicio.html';
  });
});
