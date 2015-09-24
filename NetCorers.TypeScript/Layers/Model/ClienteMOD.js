// TypeScript é um JS orientado a Objeto
// Estamos simulando uma NAMESPACE
var Layers;
(function (Layers) {
    (function (Model) {
        // Criamos uma classe de armazenamento de dados.
        var ClienteMOD = (function () {
            function ClienteMOD() {
            }
            return ClienteMOD;
        })();
        Model.ClienteMOD = ClienteMOD;
    })(Layers.Model || (Layers.Model = {}));
    var Model = Layers.Model;
})(Layers || (Layers = {}));
//# sourceMappingURL=ClienteMOD.js.map
