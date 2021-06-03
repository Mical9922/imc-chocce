

//ASIGNAT A VARIABLES CONSTANTES LOS OBJETOS HTML CON EL ID
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const boton = document.getElementById("boton");
const respuesta = document.getElementById("respuesta");


//APLICANDO LA FUNCION FLECHAS CUNADO EL USUARIO HACE CLICK EN EL OBJETO BOTON

//(IMC = peso [kg]/ estatura^2)
boton.addEventListener('click', () => {
    let imc = peso.value/Math.pow((altura.value)/100,2);
    imc=imc.toFixed(3);
    respuesta.innerHTML = "Su IMC es: " + (imc);

    if(imc > 25){
        respuesta.classList.remove("verde")
        respuesta.classList.add("rojo")
    }else{
        respuesta.classList.remove("rojo")
        respuesta.classList.add("verde")
    }
})
