   
function abre() {
open("info/termos.html","Janela", "width=900, height=600, left=150, top=10, scrollbars=yes");
};
function info() {
open("info/info.html","Janela", "width=700, height=600, left=300, top=50, scrollbars=yes");
};
function contato() {
open("info/contato.html","Janela", "width=400, height=400, left=350, top=100, scrollbars=yes");
};
function comprar() {
open("info/como-comprar.html","Janela", "width=900, height=600, left=200, top=50, scrollbars=yes");
};

function envio() {
open("info/envio-pagamento.html","Janela", "width=700, height=600, left=200, top=50, scrollbars=yes");
};

//funcao para selecionar a imagem
function imagems(qual){
  var img = document.getElementById("imagem");//funcao pa selecionar a div
  img.src = qual;
}

function faq() {
open("info/faq.html","Janela", "width=700, height=600, left=200, top=50, scrollbars=yes");
};
