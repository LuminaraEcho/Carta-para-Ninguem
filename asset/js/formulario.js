// 

const form = document.getElementById('form-carta');
const mensagem = document.getElementById('mensagem');

// Salvando a carta no localStorage
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const textoCarta = mensagem.value.trim();

  if (textoCarta !== '') {
    const cartasSalvas = JSON.parse(localStorage.getItem('cartas')) || [];

    const novaCarta = {
      texto: textoCarta,
      data: new Date().toLocaleDateString('pt-BR')
    };

    cartasSalvas.unshift(novaCarta); // Adiciona a nova carta no início
    localStorage.setItem('cartas', JSON.stringify(cartasSalvas));

    mensagem.value = '';
    // Redirecionar para home após salvar
    window.location.href = 'index.html';
  }
});