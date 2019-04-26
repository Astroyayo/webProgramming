import Dado from './dado.js'
import Tablero from './tablero.js'
import Jugador from './jugador.js'

console.log('Testing')

let dado = new Dado()
let tablero = new Tablero()
let jugador1 = new Jugador()
let jugador2 = new Jugador()

//Escaleras
tablero.setCasEspecial(4-1,25-1)
tablero.setCasEspecial(13-1,46-1)
tablero.setCasEspecial(33-1,49-1)
tablero.setCasEspecial(42-1,63-1)
tablero.setCasEspecial(50-1,69-1)
tablero.setCasEspecial(62-1,81-1)
tablero.setCasEspecial(74-1,92-1)
//Serpientes
tablero.setCasEspecial(99-1,41-1)
tablero.setCasEspecial(89-1,53-1)
tablero.setCasEspecial(76-1,58-1)
tablero.setCasEspecial(66-1,45-1)
tablero.setCasEspecial(54-1,31-1)
tablero.setCasEspecial(43-1,18-1)
tablero.setCasEspecial(40-1,3-1)
tablero.setCasEspecial(27-1,5-1)

console.log(`El jugador 1 está en la casilla ${jugador1.getPosicion()+1}`)
console.log(`El jugador 2 está en la casilla ${jugador2.getPosicion()+1}`)
let test
do{
    jugador1.mover(jugador1.getPosicion() + dado.lanzarDado())
    console.log(`El jugador 1 se movió a la casilla ${jugador1.getPosicion()+1} con el dado en ${dado.cara}`)
    test = jugador1.getPosicion()
    if(tablero.casilla[test] !== 0 && test <= 99){
        jugador1.setPosicion(tablero.casilla[test])
        console.log(`Casilla especial, jugador 1 se mueve a ${jugador1.posicion+1}`)
    }
    jugador2.mover(jugador2.getPosicion() + dado.lanzarDado())
    console.log(`El jugador 2 se movió a la casilla ${jugador2.getPosicion()+1} con el dado en ${dado.cara}`)
    test = jugador2.getPosicion()
    if(tablero.casilla[test] !== 0 && test <= 99){
        jugador2.setPosicion(tablero.casilla[test])
        console.log(`Casilla especial, jugador 2 se mueve a ${jugador2.posicion+1}`)
    }
}
while(jugador1.getPosicion() <= 99 && jugador2.getPosicion() <= 99)

if(jugador1.getPosicion()>jugador2.getPosicion()){
    console.log('Felicidades!!! El ganador es el jugador 1')
}else{
    console.log('Felicidades!!! El ganador es el jugador 2')
}