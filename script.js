// let carnes = ["Lomito", "Bistec", "Puyaso", "Asadanose:v"]
// console.log(carnes.length)

// let primer = carnes[0]
// console.log(primer)
// let ultima = carnes[carnes.length -1]
// console.log(ultima)

// carnes.forEach(function(elemento,indice,array){
//     console.log(elemento)
// })

// carnes.push("viuda")
// console.log(carnes)

// carnes.unshift("Ribeye")
// console.log(carnes)

// carnes.shift()
// console.log(carnes)


let frutas = []
function agregar() {
    let fruta = document.querySelector("#input").value;
    let lista = document.querySelector("#lista");
    frutas.push(fruta)
    lista.innerHTML += `<li>${fruta}</li>` ;
}

let test = []
function correr() {
    let ganador = document.querySelector("#escribir").value;
    let messi = document.querySelector("#array");
    test.push(ganador)
    messi.innerHTML += `<li>${ganador}</li>`;
}

function mostrartodo() {
    let listacompleta = document.querySelector("#listacompleta")
    frutas.forEach(function(elemento, indice, array){
        listacompleta.innerHTML += `<li>${elemento}</li>`
    })
}

function barcelona() {
    let julian = document.querySelector("#julian")
    ganador.forEach(function(elemento, indice, array){
        julian.innerHTML += `<li>${elemento}</li>`
    })
}