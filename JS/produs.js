let adaosuri = document.querySelectorAll('.pret');
let add_val = document.querySelectorAll('.addVal')
let tot_min = document.querySelectorAll('.minus');
let tot_plu = document.querySelectorAll('.plus');

let a = 120;
let b = 1;
let c = [0,0,0];
let d = ['R','C','P'];
let  pret_add = [];
adaosuri.forEach(add => {
    pret_add.push(parseInt(add.textContent))
});   



        tot_plu.forEach((plus, index) => {
            plus.addEventListener('click', ()=>{
                let cost = parseInt(add_val[index].innerHTML);
                let cost_init = parseInt(adaosuri[index].innerHTML) / cost;
                cost+= 1;
                
                add_val[index].innerHTML = cost;
                if(cost > 1) {
                    tot_min[index].style.backgroundImage = "url(../Iconite/minus_pr_or.svg)"
                    tot_min[index].style.cursor = "pointer"
                    adaosuri[index].innerHTML = '+' +cost_init * cost + "lei"; 
                }   
                if(cost >0){
                    tot_min[index].style.backgroundImage = "url(../Iconite/minus_pr_or.svg)"
                    tot_min[index].style.cursor = "pointer"
                }
                 c[index] = cost;
                Reinoire();
            });   
        });

        tot_min.forEach((minus,index) => {
            minus.addEventListener("click", ()=>
            {
                let cost = parseInt(add_val[index].innerHTML);
                let cost_init = parseInt(adaosuri[index].innerHTML) / cost;
                if(add_val[index].textContent <= 0){
                    minus.style.backgroundImage = "url(../Iconite/minus_pr.svg)";
                    minus.style.cursor = "default";
                }
                 else{
                    cost-= 1;
                    
                    add_val[index].innerHTML = cost;
                   
                        tot_min[index].style.backgroundImage = "url(../Iconite/minus_pr_or.svg)"
                        tot_min[index].style.cursor = "pointer"
                        adaosuri[index].innerHTML = '+' +cost_init * cost + "lei"; 
                }
    
                if(add_val[index].textContent == 0){
                    adaosuri[index].innerHTML = '+' +pret_add[index] + "lei"; 
                    minus.style.backgroundImage = "url(../Iconite/minus_pr.svg)";
                    minus.style.cursor = "default";
                }
                c[index] = cost;
                Reinoire();
            })
        });

let add_val_fin = document.querySelector('.add_val_fin')
let suma_start = parseInt(add_val_fin.innerHTML);
let add_nr_finn = document.querySelector('.add_nr_fin')
    
function Reinoire(){
           
            let suma_fin=0;
            suma_fin+=suma_start;
        adaosuri.forEach((add, index) => {
                suma_fin+=parseInt(add_val[index].textContent)*pret_add[index];
        });
        add_val_fin.innerHTML="+"+ suma_fin * parseInt(add_nr_finn.textContent) +"lei";
        a= suma_fin;
        b=parseInt(add_nr_finn.textContent);
        }
       
let minus_fin = document.querySelector('.minus_fin');
let plus_fin = document.querySelector('.plus_fin');
let add_nr_fin = document.querySelector('.add_nr_fin')
    
    plus_fin.addEventListener('click', Pret_nou);
    minus_fin.addEventListener('click', Pret_nou_2);

            function Pret_nou (){
                let cost = parseInt(add_nr_fin.innerHTML);
                let cost_init = parseInt(add_val_fin.innerHTML) / cost;
                       
                        cost+= 1;
                        
                        add_nr_fin.innerHTML = cost;
                        add_val_fin.innerHTML = '+' + cost_init* parseInt(add_nr_fin.textContent) + "lei"; 
                         a = cost_init;
                         b = parseInt(add_nr_fin.textContent);
                        if(cost >0){
                            minus_fin.style.backgroundImage = "url(../Iconite/minus_pr_or.svg)"
                            minus_fin.style.cursor = "pointer"
                        }
            }

            function Pret_nou_2(){
                let cost = parseInt(add_nr_fin.innerHTML);
                let cost_init = parseInt(add_val_fin.innerHTML) / cost;
                if(add_nr_fin.textContent <= 1){
                    minus_fin.style.backgroundImage = "url(../Iconite/minus_pr.svg)";
                    minus_fin.style.cursor = "default";
                }
                 else{
                    cost-= 1;
                    
                    add_nr_fin.innerHTML = cost;
                   
                        minus_fin.style.backgroundImage = "url(../Iconite/minus_pr_or.svg)"
                        minus_fin.style.cursor = "pointer"
                        add_val_fin.innerHTML = '+' +cost_init * cost + "lei"; 
                        a = cost_init;
                        b = parseInt(add_nr_fin.textContent);
                }
    
                if(add_nr_fin.textContent == 1){
                    minus_fin.style.backgroundImage = "url(../Iconite/minus_pr.svg)";
                    minus_fin.style.cursor = "default";
                }
            }

let Adauga = document.querySelector('.start');
let denumire = document.querySelector('.denumire').textContent;
let imagine = document.querySelector(".img_prod").src;



let Elemente = JSON.parse(localStorage.getItem('Elemente')) || [];
        Adauga.addEventListener("click", ()=>{
            
            let Loc;
            let Element = {
                Nume : denumire,
                Img : imagine,
                Pret : a,
                Nr : b,
                Adaosuri : c, 
                Adaosuri_name : d
            }
            // Daca nu este nimic
            if(localStorage.getItem("Elemente") == null || JSON.parse(localStorage.getItem("Elemente")).length == 0){
                Elemente.push(Element)
                localStorage.setItem("Elemente", JSON.stringify(Elemente));
            } 
                else {
                    let toate_el = JSON.parse(localStorage.getItem("Elemente"));
                    let exist = false;
                    
                toate_el.forEach((element, index) => {
                    // Daca exista element cu acest nume si cu pretul dat
                    if(element.Nume == Element.Nume && (element.Adaosuri.every((element, index) => element === Element.Adaosuri[index])))
                    {
                        Loc = index;
                        exist = true;
                    }
                });

                //Daca elementu exista facem conditia
                if(exist == true){
                    Elemente[Loc].Nr += Element.Nr;
                    localStorage.setItem("Elemente", JSON.stringify(Elemente))
                } else
                // Daca el inca nu exista
                if(exist == false){
                    Elemente.unshift(Element);
                    localStorage.setItem("Elemente", JSON.stringify(Elemente));
                }
                }
                window.location.reload();
        })