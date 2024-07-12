//VOY A HACER UNA FUNCIÓN QUE PIDA LOS DATOS Y SUS GUSTOS

alert("BIENEVENIDO A LA INMOBILIARIA MÁS GRANDE DE BUENOS AIRES");

let nombre = prompt("Bienvenido, quisieramos saber su nombre. Ingrese sólo su nombre.").toLowerCase();
let apellido = prompt("Ingrese su apellido.").toLowerCase();
let casaRecomendada;


function saludar(nombre, apellido) {
    // hacemos un saludo personalizado con los datos ingresados a través de nombre y apellido
    alert("Hola " + nombre + " " + apellido + " Te agradecemos que nos hayas elegido como tu inmobiliaria!");
    return nombre;// guarda el valor del nombre y lo retorna
};
function recomendacionPrecios(precio) {
    if (precio >= 0 &&  precio <= 100000) {
        casaRecomendada = parseInt(prompt("TENEMOS ESTÁS OPCIONES, ELIGE LA QUE TE INTERESE: \n1: ALQUILER EN RECOLETA DE 3 AMBIENTES \n2:CASA DE 5 HABITACIONES EN RECOLETA \n3: ALQUILER EN AVELLANEDA DE 5 AMBIENTES \n\nINGRESE 0 PARA SALIR"));
        // ingresa al bucle si es distinto de 0 y ejecuta un switch con diferentes opciones
        while (casaRecomendada !== 0 ) {
            switch (casaRecomendada) {
                // en caso de que sea 0 nos saldremos del loop
                case 0:
                    alert("GRACIAS POR SU VISITA!!!");
                    break;
                case 1:
                    alert("ALQUILER EN RECOLETA DE 3 AMBIENTES($80.700, ubicado en el centro ideal para una pareja)");
                    break;
                case 2:
                    alert("CASA DE 5 HABITACIONES EN RECOLETA($100000, alejado del centro, lugar tranquilo e ideal para una familia)");
                    break;
                case 3:
                    alert("ALQUILER EN AVELLANEDA DE 5 AMBIENTES($50000, cerca del shopping, lugar transitado sobre la avenida)");
                default:
                    alert("OPCIÓN INVÁLIDA");
                    break;
            };
            // verificamos si quiere seguir, si desea seguir va a ingresa nuevamente al loop hasta que se cumpla que es distinto de 0
            casaRecomendada = prompt("¿Desea ver otras opciones? Si o No").toLowerCase();
            if (casaRecomendada === "no") {
                alert("¡Gracias por su visita!");
                break;
            }else {
                casaRecomendada = parseInt(prompt("TENEMOS ESTAS OPCIONES, ELIGE LA QUE TE INTERESE: \n1: ALQUILER EN RECOLETA DE 3 AMBIENTES \n2: CASA DE 5 HABITACIONES EN RECOLETA \n3: ALQUILER EN AVELLANEDA DE 5 AMBIENTES \n\nINGRESE 0 PARA SALIR"));
            };
        };
    } else if( precio >=100001 && precio <= 200000){
        casaRecomendada = parseInt(prompt("TENEMOS ESTÁS OPCIONES, ELIGE LA QUE TE INTERESE: \n1:CASA EN PILAR DE 2 PISOS Y 6 AMBIENTES \n2:CASA EN NORDELTA DE 5 AMBIENTES(BARRIO PRIVADO) \n3:ALQUILER EN PUERTO MADERO DE 5 AMBIENTES \n\nINGRESE 0 PARA SALIR"));
        while (casaRecomendada !== 0) {
            switch (casaRecomendada) {
                case 0:
                    alert("GRACIAS POR SU VISITA!!!");
                    break;
                case 1:
                    alert("ALQUILER EN RECOLETA DE 3 AMBIENTES($80.700, ubicado en el centro ideal para una pareja)");
                    break;
                case 2:
                    alert("CASA DE 5 HABITACIONES EN RECOLETA($100000, alejado del centro, lugar tranquilo e ideal para una familia)");
                    break;
                case 3:
                    alert("ALQUILER EN AVELLANEDA DE 5 AMBIENTES($50000, cerca del shopping, lugar transitado sobre la avenida)");
                default:
                    alert("OPCIÓN INVÁLIDA");
                    break;
            };
            casaRecomendada = prompt("¿Desea ver otras opciones? Si o No").toLowerCase();
            if (casaRecomendada === "no") {
                alert("¡Gracias por su visita!");
                break;// rompe el loop y sale
            }else {
                // seguimos preguntando hasta que salga o diga que no
                casaRecomendada = parseInt(prompt("TENEMOS ESTAS OPCIONES, ELIGE LA QUE TE INTERESE: \n1: ALQUILER EN RECOLETA DE 3 AMBIENTES \n2: CASA DE 5 HABITACIONES EN RECOLETA \n3: ALQUILER EN AVELLANEDA DE 5 AMBIENTES \n\nINGRESE 0 PARA SALIR"));
            };
        };
    };
};


let capacidad = parseInt(prompt(saludar(nombre, apellido) + "\nQuisieramos saber el rango de precio en el cual estás buscando: \nmáximo a ingresar es hasta 200000"));

recomendacionPrecios(capacidad);