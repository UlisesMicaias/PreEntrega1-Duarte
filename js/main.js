//CAFETERÍA DE BUENOS AIRES
let nombre = prompt('Hola bienvenido! Nosotros somos BITTER COFFE.' + '\nIngrese sólo y únicamente su nombre para registrarse(debe tener entre 3 a 10 caracteres):').toLowerCase().trim();
let apellido = prompt('Ahora ingrese sólo y únicamente su apellido(debe tener entre 3 a 10 caracteres):').toLowerCase().trim();

//función constructora de usuarios
class Usuario {
    constructor(nombre,apellido, fecha){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha;
    };
};

let usuario;

//verifica que las condiciones que imponemos se cumplan(que los nombres y apellidos tengan entre 3 a 15 caracteres)
function verificador(nombre,apellido) {
    //recuento de caracteres para ver si coinciden con nuestras condiciones
    while(nombre.length > 15 || nombre.length < 3) {
        alert('Has ingresado una cantidad de caracteres mayor o menor a lo permitido');
        nombre = prompt('Ingrese sólo y únicamente su nombre para registrarse(debe tener entre 3 a 15 caracteres): ').toLowerCase().trim();
        console.log('entraste al if de nombre: ' + nombre);
    }
    while(apellido.length > 15 || apellido.length < 3){
        alert('Has ingresado una cantidad de caracteres mayor o menor a lo permitido');
        apellido = prompt('Ingrese sólo y únicamente su apellido(debe tener entre 3 a 15 caracteres): ').toLowerCase().trim();
        console.log('entraste a la variable if de apellido: '+ apellido);
    };
    alert('Se ha registrado exitosamente!');
    const fechaRegistro = new Date();
    usuario = new Usuario(nombre,apellido, fechaRegistro);
    //retornamos a usuario 
    return usuario;
};

function bienvenida(nombre, apellido) {
    alert(`Binevenido/a ${nombre} ${apellido}!`);
};

// variable que guarda el registro de usuario
const registrado = verificador(nombre, apellido);
console.log(registrado);

bienvenida(registrado.nombre,registrado.apellido);


const cafes = [
    {
        tipo:'espresso',
        precio: 1800,
        tamaño: 'pequeño',
        ingredientes:'café negro granulado'
    },
    {
        tipo:'macchiato',
        precio: 2300,
        tamaño: 'mediano',
        ingredientes:'café negro granulado cortado con leche'
    },
    {
        tipo:'mocca',
        precio: 2800,
        tamaño: 'grande',
        ingredientes:'café negro con chocolate en el fondo, cortado con leche y espuma de leche'
    },
    {
        tipo:'latte',
        precio: 2500,
        tamaño: 'mediano',
        ingredientes:'café negro granulado cortado con leche y espuma de leche'
    },
    {
        tipo:'cappuccino',
        precio: 2300,
        tamaño: 'mediano',
        ingredientes:'café negro granulado cortado mitad leche y espuma de leche'
    },
    {
        tipo:'bombón',
        precio: 2500,
        tamaño: 'mediano',
        ingredientes:'leche condensada y café negro arriba'
    },
    {
        tipo:'macchiato',
        precio: 2300,
        tamaño: 'pequeño',
        ingredientes:'café negro granulado cortado con leche'
    },
    {
        tipo:'irish',
        precio: 2300,
        tamaño: 'grande',
        ingredientes:'café negro granulado cortado con whiskey y espuma de leche'
    },
    {
        tipo:'azteca',
        precio: 3000,
        tamaño: 'grande',
        ingredientes:'café negro granulado cortado con leche y una bocha de helado de chocolate arriba'
    },
];
//array de las compras totales del usuario
let compra = [];
//vamos a usar la variable confirmacion para validar que el usuario quiera realizar un movimiento o no
let confirmacion = confirm(`Nuestra cafetería se caracteriza por su variedad en cafés de todo el mundo! \n ¿Desea ver nuestro menú?`);
let cafeComprado;
//función que recorre todos los elementos del array y los devuelve
function menu(productos) {
    productos.forEach(productos =>{
        alert(`${productos.tipo} \nprecio: $${productos.precio} \ntamaño: ${productos.tamaño} \ningredientes: ${productos.ingredientes}`);
    });
};

//funcion para mostrar todos los productos que se han comprado
function compraTotal(productos) {
    productos.forEach(productos =>{
        alert(`Compra total: \n${productos.tipo}  $${productos.precio}`);
    });
};

//funcion que busca los productos a comprar
function busquedaDeProducto(nombre) {
    cafeComprado = cafes.find(el => el.tipo === nombre);
    while (cafeComprado === undefined) {
        alert('Error! este producto no existe o está mal escrito');
        nombre = prompt('Ingrese el nombre del café que quiera comprar: ').toLowerCase().trim();
        cafeComprado = cafes.find(el => el.tipo === nombre);
    }
    compra.push(cafeComprado);
};

if (confirmacion) {
    menu(cafes);
};

confirmacion = confirm('Desea comprar algo?');
//tiene el valor de todo lo que se pusheo para comprar
function listaDeCompraToTal() {
    while(confirmacion) {
        let cafeEncontrado = prompt('Ingrese el nombre del café que quiera comprar: ').toLowerCase().trim();
        busquedaDeProducto(cafeEncontrado);
        confirmacion = confirm('¿Quiere comprar más?');
    };
    return compra;
};
if (confirmacion) {
    compraTotal(listaDeCompraToTal());
} else {
    alert('Ha decidido no comprar nada. Gracias por su visita!');
};