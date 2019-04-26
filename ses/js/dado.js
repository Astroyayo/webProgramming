class Dado {
  constructor(){
    this.cara = undefined
  }
  lanzarDado(){
    this.cara =  Math.floor(Math.random()*(7-1))+1
    return this.cara
  }
}
export default Dado
