const valorTicket= 200;

let descuentoEstudiante= 80;
let descuentoTrainee= 50;
let descuentoJunior= 15;

let nombre= document.getElementById ("nombre");
console.log (nombre);
let apellido= document.getElementById ("apellido");
console.log (apellido);
let mail= document.getElementById ("mail");
console.log (mail);
let cantidadTickets= document.getElementById ("cantidadTickets");
console.log (cantidadTickets);
let categoria= document.getElementById ("categoriaSelect");
console.log (categoria);
let totalPago= document.getElementById ("totalPago");

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i=0; i<x.length; i++){
        x[i].classList.remove("is-invalid");
    }
}

function resetTotalAPagar(){
    quitarClaseError();
    totalPago.innerHTML ="";
}

function totalAPagar(){
        quitarClaseError();

        if (nombre.value === "") {
            nombre.classList.add("is-invalid");
            nombre.focus();
            alert("Por favor, escriba su nombre");
            return;
        }
        if (apellido.value === "") {
            apellido.classList.add("is-invalid");
            apellido.focus();
            alert("Por favor, escriba su apellido");
            return;
        }
        if (mail.value === "") {
            mail.classList.add("is-invalid");
            mail.focus();
            alert("Por favor, escriba su E-mail");
            return;
        }
         const emailValido = mail => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
         }
        
        if (!emailValido(mail.value)){
            mail.classList.add("is-invalid");
            mail.focus();
            alert("Por favor, escriba un correo electrónico valido");
            return;
        }

        if ( ( cantidadTickets.value == 0) || (isNaN (cantidadTickets.value) ) ){
            cantidadTickets.classList.add ("is-invalid");
            cantidadTickets.focus();
            alert("Por favor, ingrese la cantidad de tickets que desea adquirir")   
            return
        }    

        if(categoria.value ==""){
            categoria.classList.add("is-invalid");
            categoria.focus();
            alert ("Seleccione una categoría");
            return;
        }
    }

        
    let totalValorTickets=(cantidadTickets)*valorTicket;

    switch(totalValorTickets)
    {
        case "n":
        document.write("totalValorTickets===totalValorTickets")
        break;
          
        case"e":
        document.write("totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets)")
        break
    
        case"t":
        document.write("totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets)")
        break;
        
        case"j":
        document.write("totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets)")
        break;
     }    
   
    let btnResumen
    let btnBorrar

    totalPago.innerHTML=totalValorTickets;

    btnResumen.addEventListener('click',totalAPagar);

    btnBorrar.addEventListener('click',resetTotalAPagar);