let numele_pr = document.querySelectorAll(".denum_pr");
let pret_pr = document.querySelectorAll(".pret_pr");
let nr_pr = document.querySelectorAll(".val_pr");
let minus_pr = document.querySelectorAll(".minus_pr");
let plu_pr = document.querySelectorAll(".plu_pr");
let add_pr = document.querySelectorAll(".add_pr");
let img_pr = document.querySelectorAll(".img_pr");


let Pret = [];
pret_pr.forEach(pret => {
    Pret.push(parseInt(pret.textContent))
});

plu_pr.forEach((plus, index) => {
    plus.addEventListener('click', ()=>{
        let cost = parseInt(nr_pr[index].textContent);
        cost+= 1;
        nr_pr[index].textContent = cost;
        if(cost > 1) {
            minus_pr[index].style.backgroundImage = "url(../Iconite/minus_pr_or.svg)"
            minus_pr[index].style.cursor = "pointer"
            pret_pr[index].textContent = Pret[index]* cost + " lei"; 
        }
    });    
});


minus_pr.forEach((minus, index) =>{
    minus.addEventListener("click", ()=>{
        let cost = parseInt(nr_pr[index].textContent)
        cost-=1;
        if(cost <= 1){
            nr_pr[index].textContent = cost;
            minus.style.background = "rgba(0, 0, 0, 0.1)"   
            minus.style.backgroundImage = "url(../Iconite/minus_pr.svg)";
            minus.style.cursor = "default";
            nr_pr[index].textContent = 1;
        }   else 
            {
                pret_pr[index].textContent = Pret[index]* cost + " lei"; 
                nr_pr[index].textContent = cost;
            } if(cost == 1){
                pret_pr[index] .textContent = Pret[index] * cost + " lei"
            }
            
    })
});


 
let Elemente = JSON.parse(localStorage.getItem('Elemente')) || [];
    add_pr.forEach((add, index) =>{
        add.addEventListener("click", ()=>{
            let Loc;
            let Element = {
                Nume : numele_pr[index].textContent,
                Img : img_pr[index].src,
                Pret : parseInt(pret_pr[index].textContent) / parseInt(nr_pr[index].textContent),
                Nr : parseInt(nr_pr[index].textContent),
                Adaosuri : [0,0,0]
            }
            // Daca nu este nimic
            if(localStorage.getItem("Elemente") == null || JSON.parse(localStorage.getItem("Elemente")).length == 0){
                Elemente.push(Element)
                localStorage.setItem("Elemente", JSON.stringify(Elemente));
            } 
            // Daca este ceva
                else {
                    let toate_el = JSON.parse(localStorage.getItem("Elemente"))
                    let exist = false;
                    toate_el.forEach((element,index) => {
                        // Daca el deja exista
                        if(element.Nume == Element.Nume && element.Pret == Element.Pret)
                        {
                            Loc = index;
                            exist = true;

                        } 
                    });
                    if(exist == true){
                      Elemente[Loc].Nr +=Element.Nr;
                      localStorage.setItem("Elemente", JSON.stringify(Elemente));
                      
                   } else
                    if(exist == false){
                        Elemente.unshift(Element);
                       localStorage.setItem("Elemente", JSON.stringify(Elemente));
                    } 
                }
                window.location.reload();
            }
            
        )});

let butoane_fil = document.querySelectorAll(".elem_but");
let text_fil = document.querySelectorAll(".text_fil")
butoane_fil.forEach((text, index) => {
   text.addEventListener('click', ()=>
   {console.log(text_fil[index].textContent)    
    for(let i=0; i< butoane_fil.length; i++)
    {
            text_fil[i].setAttribute("class", "text_fil")
        }
    
    text_fil[index].setAttribute("class", "text_ac")
    
    }
)})


let toate_ptod = document.querySelectorAll(".produs");

    butoane_fil.forEach( (but) => {
        but.addEventListener("click", ()=>{
            arataProdFil(but);
        })
    });

    function arataProdFil(but){
        toate_ptod.forEach(produs => {
             if(produs.classList.contains(but.id))
             {
                produs.style.display = "block"
             } else {
                produs.style.display = "none";
             }
        });
    }


    let cauta = document.getElementById("cauta");

    cauta.addEventListener("input", ()=>{
        let info = document.getElementById("cauta").value.toUpperCase();
        let produs = document.querySelectorAll(".produs");
        let nume_produs = document.querySelectorAll(".denum_pr");

        for(let i = 0; i < nume_produs.length; i++)
        {
           
            let calcul = nume_produs[i];
        
            if(calcul){
                let valoare_txt = calcul.textContent || calcul.innerHTML;
                if(valoare_txt.toUpperCase().indexOf(info) > -1)
                {
                    produs[i].style.display = "";
                } else {
                    produs[i].style.display = "none";
                }
            }
    }
})


let Produs_1 = document.querySelector('.img');
Produs_1.addEventListener("click", ()=>
{
    window.open('Produs.html', '_parent');
});

let Produs_2 = document.querySelectorAll('.img')[1];
Produs_2.addEventListener("click", ()=>
{
    window.open('Produs_2.html', '_parent');
});

let Produs_3 = document.querySelectorAll('.img')[2];
Produs_3.addEventListener("click", ()=>
{
    window.open('Produs_3.html', '_parent');
});


