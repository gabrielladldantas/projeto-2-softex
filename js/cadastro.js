const form = document.getElementById("formCadastro")


form.addEventListener("submit",(e)  => {
    e.preventDefault()

    const  produto = document.getElementById("produto").value
    const preco = document.getElementById("preco").value
    const categoria = document.getElementById("categoria").value
    const origem = document.getElementById("origem").value
    const lote = document.getElementById("lote").value
    const data = document.getElementById("data").value

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    produtos.push({produto, preco, categoria, origem, lote, data})

    localStorage.setItem("produtos", JSON.stringify(produtos))

    alert("Produto Cadastrado com Sucesso! ")
    form.reset()
})