document.querySelector('.btn-criar').addEventListener('click' , function(event){
    event.preventDefault();

    // Pega div que contem todas as imagens
    let caixaDeimagens = document.querySelector('.img-container');

    // Pega imagens e conta quantas tem
    let imagens = caixaDeimagens.querySelectorAll('img')

    console.log(imagens);

    if(imagens.length === 0) {
        let cxAlerta = document.getElementById('cx-alerta');
        cxAlerta.style.display = 'block' ; //mostrar o alerta
    }
})