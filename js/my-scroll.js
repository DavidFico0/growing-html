

//Classe de navegação de scroll suave.
$('.nav-scroll').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'), //caputra o valor do atributo href;
        targetOffset = $(id).offset().top; //mede a distancia em relação ao topo;
        //console.log(id);
    
    $('html, body').animate({
        scrollTop: targetOffset //Aplico animação jquery de scroll suave
    }, 500); // velocidade
});


