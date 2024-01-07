
//**********************************************************************************************************************************//
// CÓDIGO PARA MOSTRAR/OCULTAR EL MENÚ DE MOVIL                                                                                     //
//**********************************************************************************************************************************//

/* Recupero el icono de menú por su id y lo meto en la variable btnMenu */
let btnMenu = document.getElementById("icono-menu");

/* Añado a la variable btnMenu un evento para que, cuando se haga clic en el icono del menú, se llame a la función mostrarOcultarMenu */
btnMenu.addEventListener("click", mostrarOcultarMenu);

 
function mostrarOcultarMenu() {
    let nav = document.getElementById("nav"); /* Recupero el contenido que hay en el nav y lo meto en la variable nav */

    let clases = nav.classList; /* Recupero todas las clases que tiene el nav */

    clases.forEach(function(clase) {        /* Recorro todas las clases para ver si tiene la clase "mostrar" u "ocultar" */
        if (clase == "mostrar") {           /* Si se está mostrando, lo oculto*/
            nav.classList.add("ocultar");
            nav.classList.remove("mostrar");
        }
        if (clase == "ocultar") {           /* Si está oculto, lo muestro */
            nav.classList.add("mostrar");
            nav.classList.remove("ocultar");
        } 
    })
}

