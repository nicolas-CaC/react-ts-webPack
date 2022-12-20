interface Humano {
    nombre: string;
    hablar(frase: string): void;
}

interface Perro {
    nombre: string;
    hablar(): void;
}

const devolverObjeto = <T>(nombre: string, isHuman?: boolean): T => {

    const objeto: Humano | Perro = isHuman
        ? { nombre, hablar(frase: string) { console.log(frase) } }
        : { nombre, hablar() { console.log("Guau Wof") } };

    return objeto as T;
};


export const genericos = () => {

    const ser1 = devolverObjeto<Humano>("Pedro", true);
    const ser2 = devolverObjeto<Perro>("Pichichus");

    ser1.hablar("Como le va?");
    ser2.hablar();

};