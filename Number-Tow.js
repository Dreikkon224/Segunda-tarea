let carrito = [] ;

function cargarUnItem () {
    const nuevoItem = new Item();
    nuevoItem.manga = prompt ("Ingrese en nombre de un Manga");
    nuevoItem.editorial = prompt ("Ingrese una Editorial");
    nuevoItem.volumen = prompt ("Ingre un Volumen")
    nuevoItem.cantidad = Number (prompt("Ingrese una Cantidad"));
    nuevoItem.precio = Number (prompt("Ingese un Precio"));

    carrito.push(nuevoItem);
}
const cargarItems = () => {
    let seguir;
    do {
        cargarUnItem();
        seguir = prompt("Desea anadir más productos si/no");
    
    }while (seguir == "si");
}
 
function mostrarCarrito () {
    let ticket = '';
    let totalTicket = 0;
        carrito.forEach((item) => {
            ticket = ticket + `nombre: ${item.nombre} \n editorial: ${item.editorial} \n volumen: ${item.volumen} \n cantidad: ${item.cantidad} \n precio: ${item.precio} \n subtotal: ${item.subTotal()} \n\n`;
    })

    totalTicket = carrito.reduce((total,item) => {
        return total + item.subTotal();
    },0);

    alert(ticket + `Total: ${totalTicket}`);
}

cargarItems();
mostrarCarrito();