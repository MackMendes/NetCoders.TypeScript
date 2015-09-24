module Layers.Business {
    export class ClienteBUS implements Base.IBaseBUS<Model.ClienteMOD> {
        ValidarCamposObrigatorios(modelo: Model.ClienteMOD): void {
            if (modelo.Nome === "") {
                throw new Error("Informe o Nome");
            }

            if (modelo.Email === "") {
                throw new Error("Informe o E-mail");
            }

            if (modelo.Telefone === "") {
                throw new Error("Informe o Telefone");
            }

            if (modelo.Data.toString() === "") {
                throw new Error("Informe a Data Nascimento");
            }
        }

        Cadastrar(modelo: Model.ClienteMOD): void {

        }
    }
} 