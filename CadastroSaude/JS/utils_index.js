function novo_cadastro() {
    document.getElementById("div_Cadastro").style.visibility = "visible";
}

function mostrar_identificador_CTPS() {
    document.getElementById("div_IdentificadorCTPS").style.visibility = "visible";
    esconder_identificador_Certidao();
    esconder_identificador_Eleitor();
}

function esconder_identificador_CTPS() {
    document.getElementById("div_IdentificadorCTPS").style.visibility = "hidden";
}

function mostrar_identificador_Certidao() {
    document.getElementById("div_IdentificadorCertidao").style.visibility = "visible";
    esconder_identificador_CTPS();
    esconder_identificador_Eleitor();
}

function esconder_identificador_Certidao() {
    document.getElementById("div_IdentificadorCertidao").style.visibility = "hidden";
}

function mostrar_identificador_Eleitor() {
    document.getElementById("div_IdentificadorEleitor").style.visibility = "visible";
    esconder_identificador_Certidao();
    esconder_identificador_CTPS();
}

function esconder_identificador_Eleitor() {
    document.getElementById("div_IdentificadorEleitor").style.visibility = "hidden";
}

function esconde_todos_identificadores(){
    esconder_identificador_Certidao();
    esconder_identificador_CTPS();
    esconder_identificador_Eleitor();
}

function checa_identificador(var a){


}
