// função de incluir na tela
function inserir(nun){
    document.querySelector(".tela").innerHTML += nun;
}

//funcão de limpar a tela
function clean() {
    document.querySelector(".tela").innerHTML = "";
}

// função de apagar separado
function back() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.substring (0, tela.length -1)
   }

// Função de somar
function somar(){
    let tela = document.querySelector(".tela").innerHTML;    
    if (tela){
        document.querySelector(".tela").innerHTML = eval(tela);
    } else {
        document.querySelector(".tela").innerHTML = "sem valor"
    }        
}
