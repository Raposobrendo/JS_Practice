console.log("Teste isolado")

let x = 1
let y = 2

console.log("Antes:")
console.log("x =", x)
console.log("y =", y)

[x, y] = [y, x]

console.log("Depois:")
console.log("x =", x)
console.log("y =", y)