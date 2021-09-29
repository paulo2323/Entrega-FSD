const desplegable = document.getElementsByClassName('desplegable')[0];
const navfield = document.getElementsByClassName('nav-field');

var abierto = false
function menuclick(){
    if (!abierto){
        desplegable.classList.add('show_desplegable');
        for (let i = 0;i<navfield.length;i++) {
            navfield[i].classList.add('show_nav-field')
        }
        abierto = true;
    }else{
        desplegable.classList.remove('show_desplegable');
        for (let i = 0;i<navfield.length;i++) {
            navfield[i].classList.remove('show_nav-field')
        }
        abierto = false;
    }
}

