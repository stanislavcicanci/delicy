
let produse_cos = document.querySelector(".produse_cos");
let Pret_tot = document.querySelector(".pret_tot");




let produs = JSON.parse(localStorage.getItem(localStorage.key(0)));
Reinnoire_cos();
for(let i=0; i<produs.length; i++){
    let Nume = produs[i].Nume;
    if(produs[i].Adaosuri.every((element)=> element === 0))
    {
        
    } else{
        Nume += ` (${produs[i].Adaosuri_name[0]} x${produs[i].Adaosuri[0]} ${produs[i].Adaosuri_name[1]} x${produs[i].Adaosuri[1]} ${produs[i].Adaosuri_name[2]} x${produs[i].Adaosuri[2]})`
    }
        produse_cos.innerHTML += `
<div class="prod_cos">
        <div class="sterg">  <button class="cru_cos"></button></div>
                <div class="prod_st">
                    <img src="${produs[i].Img}" alt=""> <h3 class="denum_cos_p">${Nume}</h3>
                </div>
                <div class="prod_dr">
                   <div class="add_min">
                    <button class="min_cos"></button>
                    <h4 class="nr_b_cos">${produs[i].Nr}</h4>
                    <button class="plu_cos"></button>
                   </div>
                   <h3 class="pret_cos">${produs[i].Nr*produs[i].Pret} lei</h3>
                </div>
            </div>
`}

function Reinnoire_cos(){
    let NR_PROD=0;
    let Cos_nr = document.getElementsByClassName('nr_pr');
    produs.forEach(element => {
        NR_PROD+=element.Nr;
        Cos_nr[0].textContent = NR_PROD;
        if(NR_PROD == 0)
        {
            Cos_nr[0].style.display = "none"
        }
    });
    if(NR_PROD == 0)
        {
            Cos_nr[0].style.display = "none"
        }
}

    Reinnoire_cos();

    let min_cos = document.querySelectorAll(".min_cos");
    let plu_cos = document.querySelectorAll(".plu_cos");
    let nr_b_cos = document.querySelectorAll(".nr_b_cos");
    let pret_cos = document.querySelectorAll(".pret_cos")
    let cru_cos = document.querySelectorAll(".cru_cos");
    let denum_cos_p = document.querySelectorAll(".denum_cos_p")

    nr_b_cos.forEach((nr, index) => {
        if( nr.textContent > 1) 
        {
            min_cos[index].style.backgroundImage = "url(../Iconite/minus_pr_or.svg)"
            min_cos[index].style.cursor = "pointer"
        }
    });

    plu_cos.forEach((plus,index) => {
        plus.addEventListener("click", ()=>
        {
            produs[index].Nr += 1;
            console.log(nr_b_cos[index])
            nr_b_cos[index].textContent = produs[index].Nr;
            pret_cos[index].textContent = produs[index].Nr * produs[index].Pret + " lei";
            localStorage.setItem('Elemente', JSON.stringify(produs));
            min_cos[index].style.backgroundImage = "url(../Iconite/minus_pr_or.svg)";
            min_cos[index].style.cursor = "pointer";
            Suma_tot();
            Reinnoire_cos();
        })
    });

    min_cos.forEach((minus,index) => {
        minus.addEventListener("click", ()=>
        {
            if(nr_b_cos[index].textContent <= 1){
                minus.style.backgroundImage = "url(../Iconite/minus_pr.svg)";
                minus.style.cursor = "default";
            }
             else{
                produs[index].Nr -= 1;
                nr_b_cos[index].textContent = produs[index].Nr;
                pret_cos[index].textContent = produs[index].Nr * produs[index].Pret + " lei";
                localStorage.setItem("Elemente", JSON.stringify(produs));
                Suma_tot();
                Reinnoire_cos();
            }

            if(nr_b_cos[index].textContent == 1){
                minus.style.backgroundImage = "url(../Iconite/minus_pr.svg)";
                minus.style.cursor = "default";
            }
        })
    });


    let Elemente = JSON.parse(localStorage.getItem('Elemente')) || [];
    cru_cos.forEach((sterg, index) => {
        sterg.addEventListener("click", ()=>
        {   
                Elemente.splice(index, 1)
                localStorage.setItem("Elemente", JSON.stringify(Elemente));
                window.location.reload()
            
        })
    });
   

    function Suma_tot(){
        let k=0;
        let p=0;
        for(let i=0 ; i<produs.length; i++){
        let pret_tot = document.querySelector(".pret_tot")
        k+=produs[i].Nr*produs[i].Pret;
        p+=produs[i].Nr;
        pret_tot.textContent = `Comandă ${p} pentru ${k} lei`}
    }

    Suma_tot();

    if(Pret_tot.textContent == 0)
    {
        let Eroare = document.querySelector(".Error");
        let Footer = document.querySelector("footer");
        Footer.style.display = "none"; 
        Eroare.style.display= "block";
        Eroare.style.display = "block"
    }

