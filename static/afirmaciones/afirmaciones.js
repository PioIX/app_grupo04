function mostrarAfirmacion() {
  
  document.getElementById('afirmacion').innerHTML = afirmaciones[0].contenido
}

// afirmaciones ya estan todos los datos, habria que hacer un IF para chequear si la afirmacion que toca es V o F, y dependiendo de eso, asignar un valor u otro a los botones

// function check(rta) <-- la llaman los botones
//   IF afirmacion == V

function check(rta){
  var foot = document.getElementById('footer');
  var imagen = document.getElementById('imagen');
  var fundamento = document.getElementById('fundamento');
  
  if((rta == 'V' && afirmaciones[0].correcta == 1) || (rta == 'F' && afirmaciones[0].correcta == 0)){
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

function siguiente(){
  // desaparece verdadero o falso, reaparece la foto y el footer
}


window.onload = mostrarAfirmacion();