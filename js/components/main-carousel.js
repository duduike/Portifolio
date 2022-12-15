
//1 Acessar a janela (Browser)  - window mas neste caso pode ser sem o window
//2 Pegar HTML todo  - document
//3 Pegar botão - querySelector (Consulta de seletor)
//4 Saber que está sendo clicado o botao

//5 Acessar a janela
//6 Pegar HTML todo
//7 Pegar elements
//8 Mover o elements para direita
//9 

//const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura
//let uma variavel que pode mudar no futuro

              //1-------2--------3------------------------------------    
const btnRight = /*window*/document.querySelector('.button-arrow.-right');
const btnLeft  = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
})

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
})