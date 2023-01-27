const botaoStart = document.getElementById("botaoStart");
const incio = document.getElementById("backImg");
const gameBoard = document.getElementById("gameBoard");
let lata = document.getElementById("lata");

botaoStart.addEventListener("click", () => {
  incio.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  lata.classList.add("move-lata");
  load();
});

/*pagina inicial /\ --------------------------------------------------- */

const homer = document.getElementById("caneca");
let left = 0;
function move(e) {
  const posicaoLata = lata.offsetTop;
  const posicaoHomer = homer.offsetLeft;
  const posicaoHomerEsq = +window
    .getComputedStyle(homer)
    .left.replace("px", "");
  const posicaoHomerDir = +window
    .getComputedStyle(homer)
    .right.replace("px", "");
  const posicaoLataEsq = lata.offsetLeft;
  if (e.keyCode == 39) {
    left += 100;

    homer.style.left = left + "px";
    if (left >= 500) {
      left = 500;
    }
  }
  if (e.keyCode == 37) {
    left -= 100;
    homer.style.left = left + "px";
    if (left <= 100) {
      left = 100;
    }
  }
}

document.onkeydown = move;

function reload() {
  lata.style.animation = `move-latas${Math.floor(
    Math.random() * 3
  )} 3s infinite linear`;
  load();
}

function load() {
  setInterval(() => {
    lata.classList.remove("hidden");
    lata.classList.add("move-lata");
    const posicaoLataEsq = lata.offsetLeft;
    const posicaoLataCima = lata.offsetTop;
    const posicaoHomer = homer.offsetTop;
    const posicaoHomerEsq = +window
      .getComputedStyle(homer)
      .left.replace("px", "");
    const posicaoHomerDir = +window
      .getComputedStyle(homer)
      .right.replace("px", "");
    window.getComputedStyle(lata);

    contato =
      posicaoLataCima >= 300 && posicaoLataEsq === 30 && posicaoHomerEsq <= 100;
    contato2 =
      posicaoLataCima >= 300 &&
      posicaoLataEsq == 130 &&
      posicaoHomerEsq >= 100 &&
      posicaoHomerEsq <= 200;
    contato3 =
      posicaoLataCima >= 300 &&
      posicaoLataEsq == 230 &&
      posicaoHomerEsq >= 200 &&
      posicaoHomerEsq <= 300;
    contato4 =
      posicaoLataCima >= 300 &&
      posicaoLataEsq == 330 &&
      posicaoHomerEsq >= 300 &&
      posicaoHomerEsq <= 500;
    if (contato || contato2 || contato3 || contato4) {
      points += 10;
      htmlPoints.innerHTML = points;
      lata.classList.remove("move-lata");
      lata.classList.add("hidden");
      reload();
      clearInterval(load);
    } else if (posicaoLataCima > 550) {
      lata.classList.remove("move-lata");
      lata.classList.add("hidden");
      points -= 10;
      htmlPoints.innerHTML = points;
      if (points <= 0) {
        alert("GAME OVER !!!!");
        clearInterval(load);
      }
    }
  }, 10);
}

if (lata.classList == "hidden") {
  load();
}
const htmlPoints = document.getElementsByClassName("pontos")[0];

let points = 0;
























































































































































































// const botaoStart = document.getElementById("botaoStart")
// const incio = document.getElementById("backImg")
// const gameBoard = document.getElementById("gameBoard")

// botaoStart.addEventListener("click", () => {
//     incio.classList.add("hidden")
//     gameBoard.classList.remove("hidden")
//     start()
// })

// /*pagina inicial /\ --------------------------------------------------- */

// const homer = document.getElementsByClassName('caneca')[0]


// window.addEventListener("keydown", (event) => {
//     const homer = document.getElementsByClassName('caneca')[0]
//     let kDown = event.key
//     console.log(kDown)
//     if (kDown === "ArrowRight") {
//         const nextRight = homer.nextSibling.nextSibling;

//         nextRight.classList.add('caneca');
//         homer.classList.remove('caneca');

//         console.log(homer.className ==="grid")
//     } if (kDown === "ArrowLeft") {
//         const nextLeft = homer.previousSibling.previousSibling
//         if(nextLeft.className === "grid2"){
//         nextLeft.classList.add('caneca')
//         homer.classList.remove('caneca')
//         }
//     }
// })


// /*const caneca = document.getElementsByClassName("caneca")

// window.addEventListener("keydown", (event) => {
// let kDown = event.keyCode
// if (kDown == "37") {

// }if (kDown == "39") {
// caneca.classList.add("move-right")
// setTimeout(()=> {
// caneca.classList.remove("move-right")
// }, 3000)
// }
// })*/

// //------------------------- PARA MEXER O HOMER /\ ----------------------------

// const lata = document.getElementsByClassName('lata')[0]
// const htmlPoints = document.getElementsByClassName("pontos")[0]

// let points = 0

// function start() {
//     let counter = 0;
//     const move = setInterval(() => {
//         const lata = document.getElementsByClassName("lata")[0];
//         const moveSlide =
//         lata.nextElementSibling.nextElementSibling.nextElementSibling
//         .nextElementSibling.nextElementSibling;
//         moveSlide.classList.add("lata");
//         lata.classList.remove("lata");
//         counter++;
//         console.log(counter);
//         if (counter === 4) {
//             clearInterval(move);
//             moveSlide.classList.remove("lata");
//       console.log(moveSlide.classList);
//       if (moveSlide.classList.length === 2) {       
//         // se tiver duas classes "caneca" e "lata". player acertou
//         points+=10;
//         htmlPoints.innerHTML = points
//         console.log(points)
//       } else {
//       points-=10;
//    if(points <= 0){
//     alert("GAME OVER !!!!")
// console.log("player não pegou a cerveja");
// }
     
//       }
//     }
//     }, 1000);
// }






















//  const move = setInterval (() =>{
//     const lata = document.getElementsByClassName('lata')[0];
// const moveSlide = lata.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// moveSlide.classList.add('lata');
// lata.classList.remove('lata');

// if (moveSlide.className === "grid2") {
//     clearInterval(move)
//     moveSlide.classList.remove('lata')
//     } 
 
// },1000)