
//1 Acessar a janela (Browser)  - window mas neste caso pode ser sem o window
//2 Pegar HTML todo  - document
//3 Pegar botão - querySelector (Consulta de seletor)
//4 Saber que está sendo clicado o botao


//const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura
//let uma variavel que pode mudar no futuro

              //1-------2--------3------------------------------------    
    const btnRight = /*window*/ document.querySelector('.button-arrow.-right');
    const btnLeft = document.querySelector('.button-arrow.-left');
    const elements = document.querySelector('.elements');
    let pixels = 0
    let totalWidth = elements.scrollWidth;

    btnRight.addEventListener('click', function () {
        pixels = pixels + 100;
        elements.style = `transform: translateX(${pixels}px)`;

        if (pixels > totalWidth - 200) {
            // pixels = 100 - totalWidth;  esse volta para o inicio mas não do jeito certo
            pixels = 0 - 100;

        }
    })

    btnLeft.addEventListener('click', function () {
        pixels = pixels - 100;
        elements.style = `transform: translateX(${pixels}px)`;

        if (pixels < 0) {
            pixels = 0 + 100;
        }
    })