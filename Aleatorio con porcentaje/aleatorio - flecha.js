var a = porcentaje => Math.random() < porcentaje 
    v = 0, 
    f = 0; 
 
for(var i=0; i<100; i++) 
    a(0.8) ? v++ : f++; 
 
console.log("Verdadero: ", v); 
console.log("Falso:     ", f); 