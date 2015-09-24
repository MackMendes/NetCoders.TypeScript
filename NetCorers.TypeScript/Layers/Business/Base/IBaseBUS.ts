// Simulando uma interface
module Layers.Business.Base {
    //Criamos um contrato generénico
    export interface IBaseBUS<TModelo> {

        // Métodos com parametros de entrada flexíveis
        ValidarCamposObrigatorios(modelo: TModelo): void;

        Cadastrar(modelo: TModelo): void;
    }
} 