let preco = 19.90
let desconto = 0.4
let precoComDesconto = preco * (1 - desconto)
console.log("Valor total: " + precoComDesconto)

let nome = "Caderno"
let categoria = "Papelaria"
console.log(
    "Nome: " + nome
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Descoto: " + desconto*100
    + ", Preço com desconto: " + precoComDesconto
)