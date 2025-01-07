let Trecere = 0;

let Linia = document.querySelector(".slider-line");
console.log(Linia);

let butPlus = document.querySelector("#urmat");
let butMin = document.querySelector("#trecut");


let cifre = document.getElementsByClassName("cifra");
let linii = document.getElementsByClassName("mica");
let buttons =document.getElementsByClassName("slid-but");

let Butoane = document.querySelectorAll(".slid-but")
Culorile();


document.querySelector("#urmat").addEventListener('click', ()=>{
    Trecere += 1000;
    if(Trecere > 2000)
    {
        Trecere = 0;
    }
    else {
        butPlus.style.cursor = "pointer";
    }
    Linia.style.right= Trecere +"px";
    Culorile();
});

document.querySelector("#trecut").addEventListener('click', ()=>{
    Trecere -= 1000;
    if(Trecere < 0)
    {
        Trecere = 2000;
    }
    else {
        butMin.style.cursor = "pointer";
    }
    Linia.style.right= Trecere +"px";
    Culorile();
});

function Culorile(){
            for(let i=0, j=0; i<=2000, j<3; i+=1000, j++){
                if(Trecere == i) 
                {
                    buttons[j].className  +=" slid_but_ac";
                    cifre[j].className +=" cifra_ac"
                    linii[j].className +=" linia_ac"
                }
                else {
                    buttons[j].className ="slid-but";
                    cifre[j].className ="cifra";
                    linii[j].className = linii[j].className.replace("linia_ac","");
                }
            }
            
        };


        Butoane.forEach((button, index) => {
            button.addEventListener("click", ()=>{
               if(index == 0) {Trecere = 0;} else 
                 if(index == 1) {Trecere = 1000;} else
                  {Trecere = 2000;}
               Linia.style.right= Trecere +"px";
              Culorile();
        })});

        function deschidePagina() {
            window.location.href = "./HTML/Meniu.html";
          }

          let Alege = document.querySelectorAll(".alege");
          Alege.forEach(aleg => {
            aleg.addEventListener('click', ()=>
            {
                window.location.href = "./HTML/Meniu.html";
            })
          });

          let Start = document.querySelectorAll(".start");
          Start.forEach(start => {
            start.addEventListener("click", ()=>{
                if(start.textContent == "Start rapid"){
                window.location.href = "#centru";}
                else {
                    window.location.href = "./HTML/Meniu.html";
                }
            })
          });

          let Vezi = document.querySelectorAll(".vezi");
          Vezi.forEach(aleg => {
            aleg.addEventListener('click', ()=>
            {
                window.location.href = "./HTML/Meniu.html";
            })
          });

