var numAfirmacion = 0;    // el nro de pregunta actual, empieza en cero - diegocode
window.onload = mostrarAfirmacion(numAfirmacion);

// mostrarAfirmacion recibe entre () el nro de pregunta a mostrar - diegocode
function mostrarAfirmacion(n) {  
  // en lugar de [0] va [numAfirmacion] - diegocode
  document.getElementById('afirmacion').innerHTML = afirmaciones[n].contenido
  // console.log(afirmaciones);
}

// afirmaciones ya estan todos los datos, habria que hacer un IF para chequear si la afirmacion que toca es V o F, y dependiendo de eso, asignar un valor u otro a los botones

// function check(rta) <-- la llaman los botones
//   IF afirmacion == V

function check(rta){
  var foot = document.getElementById('footer');
  var imagen = document.getElementById('imagen');
  var fundamento = document.getElementById('fundamento');

  // en lugar de [0] va [numAfirmacion] - diegocode
  if((rta == 'V' && afirmaciones[numAfirmacion].correcta == 1) || (rta == 'F' && afirmaciones[numAfirmacion].correcta == 0)){
    var verdadero = document.getElementById('verdadero');
    imagen.style.display = 'none'; //desaparece
    verdadero.style.display = 'block'; //aparece
    footer.style.display = 'none'; //desaparece
    //fundamento.innerHTML += // afirmaciones[0].fundamento *ACA HABRIA QUE CAMBIAR LA BASE Y PONERLE FUNDAMENTO DE NOMBRE A LA NUEVA COLUMNA*
  }else{
    var falso = document.getElementById('falso');
    falso.style.display = 'block';
    footer.style.display = 'none';
    imagen.style.display = 'none';
  }  
}


// muestra afirmación siguiente - diegocode
function siguiente(){
  var foot = document.getElementById('footer');
  var imagen = document.getElementById('imagen');
  var fundamento = document.getElementById('fundamento');
  var falso = document.getElementById('falso');
  var verdadero = document.getElementById('verdadero');
  
  
  imagen.style.display = 'block'; //desaparece
  footer.style.display = 'block'; //desaparece
  
  verdadero.style.display = 'none'; //aparece
  falso.style.display = 'none'; //desaparece
  
  numAfirmacion++;  
  
  mostrarAfirmacion(numAfirmacion)
}


