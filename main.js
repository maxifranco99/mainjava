//alert()
for(let i=0; i<=10; i++){
    console.log(`interacion ${i}`);
}
console.log('fin del ciclo');

var dias = ["lunes", "martes", "miercoles", "jueves", "viewrnes", "sabado", "domingo"];

var numeroDias = dias.length -1;
var i = 0
while (i <= numeroDias) {
    document.write( dias [i] + "<br>" );
    i++;
}