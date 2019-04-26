class Tablero{
    constructor(){
        this.casilla = new Array(100)
        for(let i = 0; i < 100; i++){
            this.casilla[i] = 0
        }
    }
    setCasEspecial(indice,cFinal){
        this.casilla[indice] = cFinal
    }
}
export default Tablero