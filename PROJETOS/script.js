const botaoStart = document.getElementById("botaoStart")
const incio = document.getElementById("backImg")
const gameBoard =  document.getElementById("gameBoard")

botaoStart.addEventListener("click", () => {
    incio.classList.add("hidden")
    gameBoard.classList.remove("hidden")
})

/*pagina inicial /\ --------------------------------------------------- */


const caneca = document.getElementsByClassName("caneca")

window.addEventListener("keydown", (event) => {
let kDown = event.keyCode
if (kDown == "37") {
    
    console.log("oi")
}if (kDown == "39") {

    console.log("tchau")
}
})