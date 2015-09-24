/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/bootbox/bootbox.d.ts" />
/// ===== Acima são as referêmcias dos arquivos que dependência desta arquivo
// Aqui dentro vamos programar a Tela(View)
// Temos que mapear o LOAD da TELA e depois Mapear o Click do Botão
// É necessário o Jquery.js para rodar! Mesmo que temos que utilizar o Jquery Definity
// Bibliotecas em JS puro não se integram com o TypeScirpt. Não tem compatibilidade temos que portar
// essa LIBS para TypeScript, quando portamos o nome bunitão é o TypeScript Definition
// Obs: Não é programar do Zero é criar uma Interface
// Com assinaturas para todos os comandos
// Feito abaixo um function (Delegalate) anonymo
$(function () {
    $('#cadastrar').click(function () {
        // Quando o usuário clicar no botão temos que pegar os dados da tela e jogar para dentro do Model
        //Equivale ao USING (Importamos a NameSpace)
        var modelos = Layers.Model;

        var negocios = Layers.Business;

        //Criamos uma instancia da classe do Modelo
        var modelo = new modelos.ClienteMOD();
        var negocio = new negocios.ClienteBUS();

        // Os valores que estão sendo inputado nos atributos já são convertidos implicitamente
        modelo.Nome = $('#nome').val();
        modelo.Email = $('#email').val();
        modelo.Telefone = $('#telefone').val();
        modelo.Data = $('#data').val();

        try  {
            // Acionamos a classe de negócio passando
            // O model (dados da tela) lá pra dentro
            negocio.ValidarCamposObrigatorios(modelo);
            negocio.Cadastrar(modelo);
        } catch (e) {
            // Chamada do BootBox para o alerta.
            bootbox.alert(e.message);
        }
    });
});
//# sourceMappingURL=CadastrarVM.js.map
