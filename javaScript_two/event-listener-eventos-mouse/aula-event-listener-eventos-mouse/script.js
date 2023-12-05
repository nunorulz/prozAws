let quantidadeSubtotal = document.getElementById('quantidade-subtotal');
let valorSubtotal = document.getElementById('valor-subtotal');

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + ' itens';
valorSubtotal.innerText = subtotalInfo.valor;

let btnAddProdutos01 = document.querySelector('#btn-adicionar-produto-01');
let qtdProdutos01 = document.querySelector('#quantidade-produto-01');
let btnSubProdutos01 = document.querySelector('#btn-subtrair-produto-01');

const addUm = () => {
  qtdProdutos01.value = parseInt(qtdProdutos01.value) + 1;
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
  subtotalInfo.valor = subtotalInfo.valor + 11.66;
  atualizarSubtotal();
  atualizarValor();
};

const SubUm = () => {
  qtdProdutos01.value = parseInt(qtdProdutos01.value) - 1;
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
  subtotalInfo.valor = subtotalInfo.valor - 11.66;
  atualizarSubtotal();
  atualizarValor();
};

const atualizarSubtotal = () => {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + ' itens';
  valorSubtotal.innerText = subtotalInfo.valor;
};

const atualizarValor = () => {
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
};

btnAddProdutos01.addEventListener('click', addUm);
btnSubProdutos01.addEventListener('click', SubUm);
