//declaramos variables

var operandoa;
var operandob;
var operandoc;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

    //Eventos de Click
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }    

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}

function validarEntero(monto){
    //Debemos siempre validar que nuestro monto sea un entero.
    monto = parseInt(monto)
    //comprabamos si es un valor numerico.
    if (isNaN(monto)){
    //si no llegase a ser un numero pues regresamos la casilla vacia
      return "";
    }else{
      //en caso contrario recuerden regresar el mismo valor ingresado.
      return monto;
    }
}


function calcula(){
    //estamos validando que haya ingreso un monto del caso de que no sea así lanzamos alerta.
    monto = document.fvalida.monto.value
    monto = validarEntero(monto)
    document.fvalida.monto.value=monto
    if (monto=="") {
      alert('Por favor ingrese una cantidad.')
      document.fvalida.monto.focus()
      return 0;
    }

    if (document.fvalida.metodo.selectedIndex==0){
      alert("Debe seleccionar un metodo.")
      document.fvalida.metodo.focus()
      return 0;
    }else{
      if(document.fvalida.metodo.selectedIndex==1){
        var sum1 = monto * 3 / 100
        var total1 = sum1 + monto
        document.getElementById('fee').innerHTML = sum1;
        document.getElementById('total').innerHTML = total1;
      }
      if(document.fvalida.metodo.selectedIndex==2){
        var sum2 = monto * 2 / 100
        var total2 = sum2 + monto
        document.getElementById('fee').innerHTML = sum2;
        document.getElementById('total').innerHTML = total2;
      }
      if(document.fvalida.metodo.selectedIndex==3){
        var sum3 = monto * 4 / 100
        var total3 = sum3 + monto
        document.getElementById('fee').innerHTML = sum3;
        document.getElementById('total').innerHTML = total3;
      }
    }    
}

function validarEdad(edad){
    //intento convertir a entero.
   //si era un entero no le afecta, si no lo era lo intenta convertir
   valor = parseInt(edad)

    //Compruebo si es un valor numérico
    if (isNaN(edad)) {
          //entonces (no es numero) devuelvo el valor cadena vacia
          return ""
    }else{
          //En caso contrario (Si era un número) devuelvo el valor
          return edad
    }
}

function validarEmail(correo) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    .test(correo)){
     alert("La dirección de email " + correo + " es correcta.") //si la direccion es correcta devuelve el valor ingresado.
     return correo;
    } else {
     alert("La dirección de email es incorrecta.")
     return ""; //en caso de que no sea correcta la devuelve vacia
    }
}

function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEdad(edad)
    document.fvalida.edad.value=edad
    if (edad==""){
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    }else{
        if (edad<18){
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }

    //valida el correo
    correo = document.fvalida.correo.value
    correo = validarEmail(correo)
    document.fvalida.correo.value=correo
    if (correo==""){
        alert("Tiene que introducir un correo valido.")
        document.fvalida.correo.focus()
        return 0;
    }

    //valida el interés
    if (document.fvalida.interes.selectedIndex==0){
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario.");
}  