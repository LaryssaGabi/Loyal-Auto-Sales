let formulario = document.querySelector(".fale-conosco");
let mascara = document.querySelector(".mascara-form");
const botaoFecharModal = document.querySelector(".fechar-modal");

function cliqueiNoBotao() {
    // Verifica se a largura da tela é menor ou igual a 376 pixels (celulares pequenos)
    if (window.innerWidth <= 376) {
        // Se for menor ou igual a 376 pixels, mostra o formulário sem animação lateral
        formulario.style.left = "10px";
    } else if (window.innerWidth <= 500) {
        // Se for menor ou igual a 500 pixels (celulares médios), mostra o formulário sem animação lateral
        formulario.style.left = "75px";
    } else if (window.innerWidth <= 600) {
        // Se for menor ou igual a 600 pixels (celulares médios), mostra o formulário sem animação lateral
        formulario.style.left = "95px";
    } else if (window.innerWidth <= 768) {
        // Se for menor ou igual a 768 pixels (tablets), mostra o formulário sem animação lateral
        formulario.style.left = "150px";
    } else if (window.innerWidth <= 900) {
        // Se for menor ou igual a 900 pixels (tablets), mostra o formulário sem animação lateral
        formulario.style.left = "241px";
    } else if (window.innerWidth <= 1000) {
        // Se for menor ou igual a 100 pixels (tablets), mostra o formulário sem animação lateral
        formulario.style.left = "300px";
    } else if (window.innerWidth <= 1050) {
        // Se for menor ou igual a 1050 pixels (tablets), mostra o formulário sem animação lateral
        formulario.style.left = "300px";
    } else if (window.innerWidth <= 1200) {
        // Se for menor ou igual a 1200 pixels (tablets maiores), mostra o formulário sem animação lateral
        formulario.style.left = "305px";
    } else if (window.innerWidth <= 1290) {
        // Se for menor ou igual a 12900 pixels (tablets maiores), mostra o formulário sem animação lateral
        formulario.style.left = "450px";
    } else {
        // Se for maior que 1290 pixels (desktop), aplica a animação padrão
        formulario.style.left = "750px";
    }
    mascara.style.visibility = "visible";
}

function sumirFormulario() {
    formulario.style.left = "-340px";
    mascara.style.visibility = "hidden";
}

function fecharModal() {
    formulario.classList.toggle("aberto");
}

botaoFecharModal.addEventListener('click', sumirFormulario);
document.addEventListener('keydown', function(event){
    if (event.keyCode === 27){
        sumirFormulario();
    }
});
