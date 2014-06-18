var F = s => s.replace(/(a|e|i|o|u)/g, '$1f$1');

console.log(F("hola"));
console.log(F("carro"));