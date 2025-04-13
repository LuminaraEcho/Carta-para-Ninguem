const listaCartas = document.getElementById('lista-cartas');

// Função para mostrar as cartas salvas e adicionar a opção de excluir
function mostrarCartasSalvas() {
  const cartasSalvas = JSON.parse(localStorage.getItem('cartas')) || [];

  listaCartas.innerHTML = ''; // Limpar lista de cartas antes de adicionar novas (para não duplicar)

  cartasSalvas.forEach((carta, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = carta.texto;

    const data = document.createElement('div');
    data.classList.add('data');
    data.innerHTML = carta.data;

    // Criando o botão de exclusão
    const excluirBtn = document.createElement('button');
    excluirBtn.classList.add('excluir-btn');
    excluirBtn.innerHTML = 'Excluir';
    
    // Função para excluir a carta
    excluirBtn.addEventListener('click', function() {
      excluirCarta(index);
    });

    // Adicionando os elementos no card
    card.appendChild(paragrafo);
    card.appendChild(data);
    card.appendChild(excluirBtn); // Adiciona o botão de excluir no card
    listaCartas.appendChild(card);
  });
}

// Função para excluir uma carta do localStorage
function excluirCarta(index) {
  const cartasSalvas = JSON.parse(localStorage.getItem('cartas')) || [];
  cartasSalvas.splice(index, 1); // Remove a carta pela posição (index)
  localStorage.setItem('cartas', JSON.stringify(cartasSalvas)); // Atualiza o localStorage
  mostrarCartasSalvas(); // Atualiza a lista de cartas na tela
}

// Carrega as cartas ao carregar a página
mostrarCartasSalvas();
