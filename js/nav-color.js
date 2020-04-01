$(document).ready(function (){
    //var cadastro = document.getElementById('cadastro').id;
    var cadastro = $("#cadastro").offset();
    var sobre = $("#sobre").offset();
    var home = $("#home").offset();
    //console.log(home.top, $(window).scrollTop());
    //console.log($(window).scrollTop());
    
    $(window).scroll(function(){
       
        if($(window).scrollTop() > home.top && $(window).scrollTop() <= sobre.top){
            //alert(true);
            $('nav').addClass('scrolled');
        } else if($(window).scrollTop() > sobre.top && $(window).scrollTop() <= cadastro.top) {
            $('nav').removeClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
        //$('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
    })
})

function posicao(e) {
    var el = this;
    var coordenadas = el.getBoundingClientRect();
    console.log('posição x', coordenadas.left, 'posição y', coordenadas.top)
}
// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
// })


