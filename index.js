
auto();
function auto(){
    var slides = document.querySelectorAll('.slide')
    var x = 0;
    var thoigian =  setInterval(function(){
        if(x==slides.length-1){
            x=0;
        }else{
            x=x+1;
        }
        for(var i=0;i<slides.length;i++){
            if(i==x){
                slides[i].classList.add('active');
            }else{
                slides[i].classList.remove('active');

            }
        }    
    },5000);
}
//modal
var menu = document.querySelector('.header-search_menu');
var menuActive = document.querySelector('.header_menu-re')
var modalClose = document.querySelector('.modal-close')
var btnClose = document.querySelector('.btn-close')
menu.onclick = function(){
    menuActive.classList.toggle('active')
}

var buyTicket = document.querySelectorAll('.tour-btn');
var modal = document.querySelector('.modal');

buyTicket.forEach(e => {
    e.onclick = function(){
        modal.classList.add('active')
    }
})

modalClose.onclick = function(){
    modal.classList.remove('active')

}
btnClose.onclick = function(){
    modal.classList.remove('active')

}

var loader = document.querySelector('.loader');

window.onload = () => {
    fadeOut()
}

function loading(){
    loader.classList.add('active');
}
function fadeOut(){
    setTimeout(loading,4000);
}