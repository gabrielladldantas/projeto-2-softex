window.onload = carregarProdutos;

const tabela = document.getElementById("tabelaProdutos")

function carregarProdutos () {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    tabela.innerHTML = "";
    
    produtos.forEach((u, index) => {
        tabela.innerHTML += `
        <tr>
            <td>${u.produto}</td>
            <td>${u.preco}</td>
            <td>${u.categoria}</td>
            <td>${u.origem}</td>
            <td>${u.lote}</td>
            <td>${u.data}</td>
              <td>
                <button onclick="editarProduto(${index})">Editar</button>
                <button onclick="excluirProduto(${index})">Excluir</button>
              </td>
        </tr>

        `
        
    });

}

function excluirProduto (index) {
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
produtos.splice(index, 1);
localStorage.setItem("produtos", JSON.stringify(produtos));
carregarProdutos();
}


function editarProduto (index) {
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
const produto = produtos[index];
const novoProduto = prompt("Editar nome do produto:", produto.produto);
const novoPreco = prompt("Editar preço:", produto.preco);
    if (novoProduto !== null && novoPreco !== null) {
    produto.produto = novoProduto;
    produto.preco = novoPreco;
    localStorage.setItem("produtos", JSON.stringify(produtos));
    carregarProdutos();

    }
}



//Precisaria de uma declaração para que quando o usuario fosse editar o valor
//ele não conseguisse usar string, tentei alguns metodos mas nenhum foi eficiente.
//Acredito que um prompt também perguntando se realmente o usuario gostaria de excluir algo seria ideial
//mas tambem não conseguie executar, eu ainda estava pesquisando mas acredito que acabaria o prazo de entrega da projeto.