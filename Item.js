class Item{
    ////Atributos
    manga;
    editorial;
    volumen;
    catidad;
    precio;


//// Metodo y Acción

    subTotal = () => {
        return this.precio*this.cantidad;
    }
}