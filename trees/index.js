import Nodo from './Nodo.js'
import ArbolBinario from './ArbolBinario.js'


let arbol = new ArbolBinario()

console.log(arbol)

document.getElementById("form1").onsubmit = function(e){
    e.preventDefault()

    let nodo = new Nodo(document.getElementById('valor').valueAsNumber)
    console.log(nodo)

    arbol.agregar(nodo)

    console.log(arbol)

    document.getElementById('valor').value = null
}

document.getElementById("form2").onsubmit = function(e){
    e.preventDefault()

    document.getElementById("resultado1").innerHTML = arbol.inOrder(arbol.raiz)
}
document.getElementById("form3").onsubmit = function(e){
    e.preventDefault()

    document.getElementById("resultado2").innerHTML = arbol.postOrder(arbol.raiz)
}
document.getElementById("form4").onsubmit = function(e){
    e.preventDefault()

    document.getElementById("resultado3").innerHTML = arbol.preOrder(arbol.raiz)
}
