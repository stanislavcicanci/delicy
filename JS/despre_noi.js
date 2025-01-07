let Start = document.querySelectorAll(".start");
          Start.forEach(start => {
            start.addEventListener("click", ()=>{
                window.location.href = "../HTML/Meniu.html";
            })
          });

          const swiper = new Swiper('.swiper', {
           
            direction: 'horizontal',
            loop: true,
            effect : 'coverflow',
            
          
          
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
          
            
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });
        