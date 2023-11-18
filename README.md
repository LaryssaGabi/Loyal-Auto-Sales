# Loyal-Auto-Sales


## Descrição
Este projeto representa o código front-end para o site da Loyal Auto Sales, uma concessionária automotiva fictícia. O site tem como objetivo oferecer aos usuários uma experiência visualmente atraente e imersiva, combinando uma imagem de fundo marcante com informações sobre as ofertas e serviços da concessionária.

## Estrutura do Código JavaScript
O código JavaScript (./src/js/index.js) foi organizado usando a abordagem de objetos para gerenciar o comportamento interativo do site. Abaixo estão os principais objetos e seus métodos explicados:

## Objeto Formulario Contato
Este objeto encapsula a lógica relacionada ao formulário de contato. Ele contém métodos para mostrar, ocultar o formulário e manipular eventos associados a ele.

Métodos
* mostrarFormulario(): Exibe o formulário de contato, ajustando dinamicamente a posição inicial com base na largura da tela.

* ocultarFormulario(): Oculta o formulário de contato, movendo-o para fora da tela.

* fecharComEsc(event): Método chamado quando a tecla "Esc" é pressionada. Verifica se a tecla pressionada é "Esc" e, se for, oculta o formulário.

* adicionarEventos(): Adiciona ouvintes de eventos para o botão de fechar modal e para a tecla "Esc". Isso garante que o formulário seja ocultado quando o usuário clica no botão de fechar ou pressiona a tecla "Esc".
