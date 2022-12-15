export const nunca = (mensaje: string): never => {
    throw new Error(mensaje);
};

export const tipos = (): void => {

    let nombre: string = "Nico";
    let numero: number = 4;
    const booleano: boolean = true;
    const indefinido: undefined = undefined;
    const nulo: null = null;
    const desconocido: unknown = false;
    let tipos: number | boolean;

    const array = [ 1, "hola", false ];
    const array2: string[] = [ "mal", "bien" ];
    const array3: [ number, boolean, string ] = [ 4, true, "cadena" ];

    nombre = "Juan";
    numero = 5;
    tipos = 4;
    tipos = true;

    console.log(nombre);
    console.log(numero);
    console.log(booleano);
    console.log(indefinido);
    console.log(nulo);
    console.log("Unknown:", desconocido, typeof desconocido);
    console.log(array);
    console.log(array2);
    console.log(array3);
    console.log("Tipos:", tipos);
    // nunca("Es el never");
};