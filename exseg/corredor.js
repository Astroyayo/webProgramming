class Corredor {
    constructor(){
      this.nombre = ''
      this.casilla = 0
      this.probabilidad = 0
    }
    setCasilla(casilla){
        this.casilla = casilla
    }
    setProbabilidad(prob){
        this.probabilidad = prob
    }
    setNombre(nombre){
        this.nombre = nombre
    }
    getNombre(){
      return this.nombre
    }
    getCasilla(){
        return this.casilla
    }
    getProbabilidad(){
        return this.probabilidad
    }
    mover(paso){
        this.casilla = paso
    }
  }
  export default Corredor