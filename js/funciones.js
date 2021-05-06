function sumar() {
    console.log( 2 + 2);
}
sumar();
sumar();
sumar();

const sumar2 = function() {
    console.log( 3 + 3);
}
sumar()

function sumar(a, b) {
    console.log( a + b );
}
sumar(2, 3);

iniciarApp();


function iniciarApp() {
    console.log("iniciando app...");
    
    segundafuction();
}


function segundafuction() {
    console.log("desde la segunda funcion");
}
const reproductor = {
    reproducir: function (id) {
        console.log("reproduciendo cancion...."); 
    },
    pausar: function() {
        console.log("pausado");
    },
    borrar:function(id) {
        console.log("borrando una cancio");
    },
    crearPlaylist:function(nombre){
          console.log("creado loco");
    },
    reproducirPlaylist:function(nombre){
        console.log("reproduciendo");
    }
}
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("Rock 90s");
reproductor.reproducirPlaylist("Heavy Metal");


const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);



if (puntaje == 1000) {
     console.log("si es igual");
}else {
    console.log("no es igual");
}

const dinero = 100;
const totalPegar = 300; 
const tarjeta = true;

if (dinero == totalPegar) {
    console.log(" hola hola ");
}else if (tarjeta) {
    console.log("si puedemos pegarte ");
}else {
    console.log("si te podemos ayudar");
}