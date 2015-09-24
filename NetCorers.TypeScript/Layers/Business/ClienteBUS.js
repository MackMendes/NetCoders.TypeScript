var Layers;
(function (Layers) {
    (function (Business) {
        var ClienteBUS = (function () {
            function ClienteBUS() {
            }
            ClienteBUS.prototype.ValidarCamposObrigatorios = function (modelo) {
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
            };

            ClienteBUS.prototype.Cadastrar = function (modelo) {
            };
            return ClienteBUS;
        })();
        Business.ClienteBUS = ClienteBUS;
    })(Layers.Business || (Layers.Business = {}));
    var Business = Layers.Business;
})(Layers || (Layers = {}));
//# sourceMappingURL=ClienteBUS.js.map
