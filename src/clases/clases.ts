export abstract class Usuarios {

    constructor(
        public user: string,
        public pass: string) { }

    abstract mostrar(): void;
}

interface Login {
    email: string;
    logueado(): boolean;
}

interface Categorias {
    categoria: string;
}

export class Premium extends Usuarios implements Login, Categorias {

    public categoria: string;

    constructor(
        public override user: string,
        public override pass: string,
        public email: string,
    ) {
        super(user, pass);
        this.categoria = "Premium";
    }

    mostrar(): void {
        console.log(this.user, this.pass);
    }

    logueado(): boolean {
        return true;
    }
}
