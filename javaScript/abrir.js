//menu oculto/vísivel
const btn_menu = document.querySelector(".icon-menu");
const menu_principal = document.querySelector(".menu");
const btn_submenu = document.querySelectorAll(".box-submenu");
const aberto = 'aberto';
const seta_cima = 'seta-cima';
const seta_baixo = 'seta-baixo';

//abrir/fachar menu
btn_menu.onclick = function () {
    if(!menu_principal.classList.contains('abrir')){
        menu_principal.classList.add('abrir');
        return;
    }
    menu_principal.classList.remove('abrir');
    for(a = 0; a < btn_submenu.length; ++a){
        
        var submenu = btn_submenu[a].children[1];
        
        if((submenu.classList.contains(aberto))){
            
            submenu.classList.remove(aberto);
            btn_submenu[a].classList.replace(seta_cima, seta_baixo);
        }
    }
};

//abrir/fechar submenus
btn_submenu[0].onclick = function () {
    
    var submenu = btn_submenu[0].children[1];    
    
    if(!submenu.classList.contains(aberto)){
        submenu.classList.add(aberto);
        btn_submenu[0].classList.replace(seta_baixo, seta_cima);
        return;
    }
    submenu.classList.remove(aberto);
    btn_submenu[0].classList.replace(seta_cima, seta_baixo);
};
btn_submenu[1].onclick = function () {
    
    var submenu = btn_submenu[1].children[1];    
    
    if(!submenu.classList.contains(aberto)){
        submenu.classList.add(aberto);
        btn_submenu[1].classList.replace(seta_baixo, seta_cima);
        return;
    }
    submenu.classList.remove(aberto);
    btn_submenu[1].classList.replace(seta_cima, seta_baixo);
};

/*abrir barra-pesquisa*/
const btn_abrir = document.querySelector(".btn-pesquisa");
const abrir = document.querySelectorAll(".ver");

btn_abrir.onclick = function(){
    if(!(abrir[0].classList.contains('display'))){
        abrir[0].classList.add('display');
        abrir[1].classList.add('display');
        return;
    }
    abrir[0].classList.remove('display');
    abrir[1].classList.remove('display');
    return;
};