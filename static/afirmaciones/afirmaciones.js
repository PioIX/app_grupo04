var numAfirmacion = 0;
var numRespuesta = 0;// el nro de pregunta actual, empieza en cero - diegocode
window.onload = mostrarAfirmacion(numAfirmacion);
window.onload = mostrarAfirmacion(numRespuesta);

var puntos = 0;
var tiempo = 0;
var tiempoinicio = (window.onload = Date.now());

// mostrarAfirmacion recibe entre () el nro de pregunta a mostrar - diegocode
function mostrarAfirmacion(n) {  
  // en lugar de [0] va [numAfirmacion] - diegocode
document.getElementById('afirmacion').innerHTML = afirmaciones[n].contenido;
document.getElementById('fundamento').innerHTML = afirmaciones[n].respuesta;
  // console.log(afirmaciones);
}

// afirmaciones ya estan todos los datos, habria que hacer un IF para chequear si la afirmacion que toca es V o F, y dependiendo de eso, asignar un valor u otro a los botones

// function check(rta) <-- la llaman los botones
//   IF afirmacion == V

// IF afirmacion es 24, armar una funcion para q ande 
function check(rta){
  var foot = document.getElementById('footer');
  var imagen = document.getElementById('imagen');
  var contenido = document.getElementById('contenido');
  console.log(numAfirmacion);
  if (numAfirmacion == 23) {
    //console.log(puntos)
   var tiempofin = (window.onload = Date.now());
   console.log(tiempoinicio)
   console.log(tiempofin)
   let tiempo = ((tiempofin - tiempoinicio)/1000);
   window.location.href = `/resultados/${puntos}/${tiempo}`;
  }
  else{
    // en lugar de [0] va [numAfirmacion] - diegocode  
  if((rta == 'V' && afirmaciones[numAfirmacion].correcta == -1) || (rta == 'F' && afirmaciones[numAfirmacion].correcta == 0)){
    var verdadero = document.getElementById('verdadero');
    contenido.style.display = 'block';
    imagen.style.display = 'none'; //desaparece
    verdadero.style.display = 'block'; //aparece
    footer.style.display = 'none'; //desaparece
    puntos++;
  }else{
    var falso = document.getElementById('falso');
    contenido.style.display = 'block';
    falso.style.display = 'block';
    footer.style.display = 'none';
    imagen.style.display = 'none';
  }  
  document.getElementsByClassName('puntaje-texto')[0].innerHTML = puntos + '/24'  
  }
  
  
}


// muestra afirmación siguiente - diegocode
function siguiente(){
  var foot = document.getElementById('footer');
  var imagen = document.getElementById('imagen');
  var fundamento = document.getElementById('fundamento');
  var falso = document.getElementById('falso');
  var verdadero = document.getElementById('verdadero');
  var contenido = document.getElementById('contenido');

   contenido.style.display = 'none';
  imagen.style.display = 'block'; 
  footer.style.display = 'block'; 
  
  verdadero.style.display = 'none'; 
  falso.style.display = 'none'; 

  numAfirmacion++;  
  
  mostrarAfirmacion(numAfirmacion)
}