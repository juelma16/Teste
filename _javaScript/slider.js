const backPack = document.querySelector("#slide");
const backImg = document.querySelectorAll(".img-slide");
const imgShow = document.querySelectorAll(".img-slide > img");
const circ = document.querySelectorAll(".cirImg");
const animar = 'animar';
var activo = 1;
var backImgChange = 2;
var tempo;

function anime(){
    if(backImgChange == 9)
        backImgChange = 1;
        
    if(backPack.className == animar){        
        backPack.classList.remove(animar);
        imgShow[0].src = "_img/bg"+backImgChange+".jpg";
        ++backImgChange;
    }
    else{        
        backPack.classList.add(animar);
        imgShow[1].src = "_img/bg"+backImgChange+".jpg";
        ++backImgChange;
    }
    circuloActivo();//a partir daqui controla o circulo seleccionado
}

function circuloActivo(){
    const activar = 'activo';     
    if(activo == circ.length)
        activo = activo % circ.length;
    
    circ[activo].classList.add(activar);
    
    for(var count = 0; count < circ.length; count++){
        if(count != activo)
            circ[count].classList.remove(activar);
    }
    ++activo;
}

tempo = setInterval(anime, 5000);