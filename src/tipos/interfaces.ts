enum Calidad {
    "A" = "Clase A",
    "B" = "Clase B",
    "C" = "Clase C",
}

interface Producto {
    nombre: string;
    precio: number;
    rating: Calidad;
    disponible: boolean;
    mostrarDatos(): void;
    cambiarRating(categoria: Calidad): boolean;
    mostrarDisponibilidad: () => boolean;
}

const detergente: Producto = {
    nombre: "Detergente",
    precio: 500,
    rating: Calidad.A,
    disponible: true,
    mostrarDatos: function () {
        console.log(this.nombre);
        console.log(this.precio);
        console.log(this.rating);
    },
    cambiarRating(categoria) {
        this.rating = categoria;
        return true;
    },
    mostrarDisponibilidad() {
        return this.disponible;
    }
};

export function interfaces(): void {
    console.log(detergente);
    detergente.mostrarDatos();
    detergente.cambiarRating(Calidad.B);
    console.log(detergente.mostrarDisponibilidad());
}