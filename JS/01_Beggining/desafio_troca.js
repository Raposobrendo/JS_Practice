console.log("Troca de valores de variáveis a para b e b para a.")
let a = 10
let b = 23

console.log("a = " + a)
console.log("b = " + b)

let c = a
a = b
b = c

// [a, b] = [b, a]

console.log("a = " + a)
console.log("b = " + b)

console.log("Ou então, fazendo de forma diferente: ")
let d = 25
let e = 31

console.log("d = " + d)
console.log("e = " + e)

[d, e] = [e, d]

console.log("d = " + d)
console.log("e = " + e)

