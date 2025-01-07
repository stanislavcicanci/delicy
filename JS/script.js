var Item = JSON.parse(localStorage.getItem('Elemente')) || [];
let Cos_nr = document.getElementsByClassName('nr_pr');
let NR_PROD=0;


    Item.forEach(element => {
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

        let meniu = document.querySelector(".meniu_2");
        let Meniu = document.querySelector(".linkuri");
        let Men = document.querySelector(".link");
        let wrapper = document.querySelector('.wrapper');
        let footer = document.querySelector('footer');
        let navRes = document.querySelector('.nav_res');
        meniu.addEventListener('click', ()=>{
            if(meniu.className == "meniu_2 meniu_2_3"){
                meniu.classList.add("meniu_2_2");
                meniu.classList.remove("meniu_2_3");
                setTimeout(function() {
                    wrapper.style.display = "none";
                    footer.style.display = "none";
                      navRes.style.display = 'block';
                  }, 800);
            }
             else {
                meniu.classList.remove("meniu_2_2");
                meniu.classList.add("meniu_2_3");
            }
        })

        
        let respm = document.querySelector(".meniu_1");

        respm.addEventListener('click', ()=>{
            respm.classList.add("meniu_2_3");
            setTimeout(function() {
                meniu.classList.remove("meniu_2_2");
                meniu.classList.add("meniu_2_3");
                wrapper.style.display = "block";
                footer.style.display = "block";
                  navRes.style.display = 'none';
              }, 300);
        })