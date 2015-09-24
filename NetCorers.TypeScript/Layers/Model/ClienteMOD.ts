// TypeScript é um JS orientado a Objeto
// Estamos simulando uma NAMESPACE

module Layers.Model {
    // Criamos uma classe de armazenamento de dados.
    export class ClienteMOD { // O export seria a visibilidade desta classe (public)
        // Criamos propriedades (locais de armazenamento dentro da classe)
        Codigo: number;
        Nome: string;
        Email: string;
        Telefone: string;
        Data: Date;
    }
}
