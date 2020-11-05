let logo = document.getElementsByTagName("header")[0].children[0];
let links = document.getElementsByTagName("header")[0].children[1].children;
let titulo = document.getElementsByClassName("grid-item__titulo")[0];
let parrafo = document.getElementsByClassName("grid-item__parrafo")[0];
let btn = document.getElementsByClassName("grid-item__btn")[0];
let img = document.getElementsByClassName("grid-item__img");



const anim_desk = () =>{
    setTimeout( () =>{
        titulo.classList.remove("grid-item__titulo--down");
        parrafo.classList.remove("grid-item__parrafo--down");
        btn.classList.remove("grid-item__btn--down");
        for(let item of img){
            item.classList.remove("grid-item__img--down");
        }
    },500);
    setTimeout( () =>{
        logo.classList.remove("logo--down");
        links[0].classList.remove("link--down");
    },600);
    setTimeout( () =>{
        links[1].classList.remove("link--down");
    },700);
    setTimeout( () =>{
        links[2].classList.remove("link--down");
    },800);
    setTimeout( () =>{
        links[3].classList.remove("link--down");
    },900);
}



const anim_selec = () =>{
    if (window.matchMedia("only screen and (min-width: 250px) and (max-width: 630px)").matches) {
        console.log("version movil");
    }else if (window.matchMedia("only screen and (min-width: 631px) and (max-width: 950px)").matches) {
        console.log("version tablet");
    }else{
        anim_desk();
    }
}


//Ejecutar la funcion cuando se termine de cargar la pagina 
window.addEventListener('load', e => {
    anim_selec();
});