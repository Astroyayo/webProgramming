class Probabilidad {
    constructor(){
      this.cara = undefined
    }
    getProbabilidad(){
      this.cara =  Math.floor(Math.random()*(11-1))+1
      return this.cara
    }
  }
  export default Probabilidad