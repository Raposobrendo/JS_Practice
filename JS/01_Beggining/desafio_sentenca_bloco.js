const PI = 3.141592
var raio = 5
var area = PI * raio * raio

console.log("Calculo da área de um circulo: com raio " + raio + ".")
console.log("Área: " + area + " m².")

console.log(Math.PI) // Com o Math, conseguimos ter o valor de PI com maior precisão
area = Math.PI * raio * raio
console.log("Área: " + area + " m².")
