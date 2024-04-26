
var pedidos = [];
var clienteEncontrado = [];
var productoEncontrado = [];
var nroPedido = 0;
var totalPedido = 0.00;
//fecha actual
const fechaDeHoy = new Date();

//defino por defecto la fecha actual obtenida
document.getElementById("fechaPedido").value = fechaDeHoy.toJSON().slice(0,10);

let listaPedidos = [];

const cliente = document.querySelector("#cliente");
const datosDelPedido = document.getElementById("datosDelPedido");
const fechaPedido = document.getElementById("fechaPedido");
const botonAgregar = document.getElementById("btnAgregar");


leerDatos2();

document.querySelector(".formpedido").addEventListener("submit", function(e) {
    e.preventDefault();
});

botonAgregar.addEventListener("click", (e) => {
    addPedido();
});

function addPedido() {
    if (cliente.value === "" || datosDelPedido.value === "" || fechaPedido.value === "") {
        return;
    }
    if (datediff(fechaPedido.value) < 0) {
        return;
    }

    const nuevoPedido = {
        id: (Math.random() * 100).toString(36).slice(2),
        fecha: fechaPedido.value,
        cliente: cliente.value,
        pedido: datosDelPedido.value,
    };

    listaPedidos.unshift(nuevoPedido);

    guardarDatos(JSON.stringify(listaPedidos));

    cliente.value = "";
    datosDelPedido.value = "";

    renderPedidos();
}

function renderPedidos() {
    console.log('renderPedidos');
    const listaPedidosHTML = listaPedidos.map((event) => {
     return `
        <div class="pedidos">
            <div class="pedido-item fecha nodone">${event.fecha}</div>
            <div class="pedido-item nodone">${event.cliente}</div>
            <div class="pedido-item nodone">${event.pedido}</div>
            <div class="fechas nodone"><span class="dias-pedido">${datediff(event.fecha)}</span><span class="pedido-item"">días</span></div>
            <div class="actions"><button data-id="${event.id}" class="btnEliminar">Eliminar</button></div>
        </div>`;
    });

    document.querySelector(".grillapedidos").innerHTML = listaPedidosHTML.join("");

    console.log(document.querySelector(".grillapedidos").innerHTML);

    document.querySelectorAll(".btnEliminar").forEach((button) => {
        button.addEventListener("click", (e) => {
        const id = button.getAttribute("data-id");
        listaPedidos = listaPedidos.filter((event) => event.id !== id);
        guardarDatos();
        renderPedidos();
        });
    });

}

function datediff(d) {
    var date1 = new Date(d);
    var date2 = new Date();
    var difference = date1.getTime() - date2.getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

function guardarDatos(data) {
    localStorage.setItem("items", data);
}

function leerDatos() {
    return JSON.parse(localStorage.getItem("items"));
}

function leerDatos2() {
    if(localStorage.getItem('items')){
        // return localStorage.getItem('items');
        const arr = JSON.parse(localStorage.getItem("items"));
        listaPedidos = [...arr];
        renderPedidos();
    }else{
        return;
    }
}

