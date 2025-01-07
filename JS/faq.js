let intrebare = document.querySelectorAll('.intrebare');
let img = document.querySelectorAll('.img')
let apare = document.querySelectorAll('.meniu_misc')
    intrebare.forEach((intreb, index) => {
        intreb.addEventListener("click", (e)=>{
         //apare[index].classList.add("scale-in-ver-top")
        if(img[index].className == "img rotate-in-center")
        {
            apare[index].classList.add("scale-out-ver-top");
            img[index].classList.add("rotate-out-center")
            img[index].classList.remove("rotate-in-center")
            apare[index].classList.add("scale-in-ver-top");
            setTimeout(function() {
                apare[index].style.display = "none";
              }, 330);
         } else {
            apare[index].style.display = "block";
            apare[index].classList.add("scale-in-ver-top");
            img[index].classList.remove("rotate-out-center")
            img[index].classList.add("rotate-in-center")
            apare[index].classList.remove("scale-out-ver-top");

         }
        })
    });

