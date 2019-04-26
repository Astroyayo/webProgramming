class Jugador {
    constructor(){
        this.posicion = 0
    }
    setPosicion(pos){
        this.posicion = pos
    }
    getPosicion(){
        return this.posicion
    }
    mover(dado){
        this.posicion = dado
    }
}
export default Jugador