import Probabilidad from './probabilidadDado.js'
import Corredor from './corredor.js'

document.getElementById('btn1').addEventListener("click", crearCorredor);
document.getElementById('btn2').addEventListener("click", comenzarCarrera);

let dado = new Probabilidad()
let corredor1 = new Corredor()
let corredor2 = new Corredor()
let flag = 0

function crearCorredor(){
    let nombre = document.getElementById('txtNombre').value
    if(flag == 0){
        corredor1.setNombre(nombre)
        flag++
    }
    else if(flag == 1){
        corredor2.setNombre(nombre)
        flag++
    }else{
        alert('ya no hay más jugadores por nombrar')
    }
}
function comenzarCarrera(){
    do{
        corredor1.setProbabilidad(dado.getProbabilidad())
        corredor1.mover(corredor1.getCasilla() + evaluarPaso(corredor1.getProbabilidad()))
        document.getElementById('racelog').innerHTML = `<p> ${corredor1.getCasilla()} </p>`

    }
    while(corredor1.getCasilla()<100&&corredor2.getCasilla()<100)
}
function evaluarPaso(pro){
    switch(pro){
        case 1:
        return 1
        break;
        case 2:
        return 1
        break;
        case 3:
        return -1
        break;
        case 4:
        return -1
        break;
        case 5:
        return 2
        break;
        case 6:
        return 2
        break;
        case 7:
        return 2
        break;
        case 8:
        return 2
        break;
        case 9:
        return 3
        break;
        case 10:
        return 3
        break;
    }
}