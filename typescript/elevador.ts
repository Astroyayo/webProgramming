class Elevador {
    private pisoActual : number
    private numPisos : number
    private edoPuerta : boolean
    
    constructor() {
        this.pisoActual = 1
        this.numPisos = 10
        this.edoPuerta = false
    }
    public get piso_Actual(){
        return this.pisoActual
    }
    
    public abrirPuerta(){
        this.edoPuerta = true
    }

    public cerrarPuerta() {
        this.edoPuerta = false
    }
    private subir() {
        if (this.edoPuerta === false) {
            if (this.pisoActual < this.numPisos){
                this.pisoActual += 1
            }
        }else{
            this.cerrarPuerta()
            this.subir()
        }
    }
    private bajar(){
        if (this.edoPuerta === false) {
            if (this.pisoActual > 1){
                this.pisoActual -= 1
            }
        }else{
            this.cerrarPuerta()
            this.bajar()
        }
    }
    public irA(destino){
        if (this.edoPuerta === false) {
            if(destino > this.pisoActual && destino <= this.numPisos){
                for (let i = 0; i < destino - this.pisoActual; i++) {
                    this.subir()
                }
            }else if(destino < this.pisoActual && destino > 0){
                for (let i = 0; i < this.pisoActual - destino; i++) {
                    this.bajar()
                }
            }
            }
        else{
            this.cerrarPuerta()
            this.irA(destino)
        }
    }
}