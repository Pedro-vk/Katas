function aleatorio(porcentaje){
	while(true) yield Math.random() < porcentaje;
}

var a = aleatorio(0.8),
    v = 0,
    f = 0;

for(var i=0; i<100; i++)
	a.next() ? v++ : f++;

console.log("Verdadero: ", v);
console.log("Falso:     ", f);