

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');
  
    videos.forEach(video => {
      video.addEventListener('mouseenter', () => {
        setTimeout(() => {
            video.currentTime = 0;
            video.classList.remove("opacity-0");
            video.play().catch(error => {
              console.error(error);
            });
        }, 200);
       
      });
  
      video.addEventListener('mouseleave', () => {
       
           

            setTimeout(() => {
                video.classList.add("opacity-0");
        
                video.currentTime = 0;
            }, 200);
            video.pause();
  
      
      });
    });
  //play video on hover

    const mainVideo = document.querySelector('.mainVideo');
setTimeout(() => {
    mainVideo.classList.remove("opacity-0");
    mainVideo.play()
}, 4500);
//autoplay video



  window.addEventListener("scroll", changeCss , false);
  });

  function changeCss () {

    const mimaneraText = document.querySelector(".mimaneraText");

    const scrollPosition = window.scrollY;

    const isInSection1 = scrollPosition >= section1.offsetTop && scrollPosition < section1.offsetTop + section1.offsetHeight
    const isInSection2 = scrollPosition >= section2.offsetTop && scrollPosition < section2.offsetTop + section2.offsetHeight
    const isInSection3 = scrollPosition >= section3.offsetTop && scrollPosition < section3.offsetTop + section3.offsetHeight

   if(isInSection1){
   
      if (scrollPosition <= section1.offsetTop) {
        mimaneraText.style.width ="90%"
      
      
       
      } else if(scrollPosition >= section1.offsetTop && scrollPosition <= section1.offsetHeight) {
  

        const distanceToLeftOfSection1 = scrollPosition - section1.offsetTop;
        const maxWidthDecrease = 100 - ((distanceToLeftOfSection1 / section1.offsetHeight) * 85); // Gradually decrease from 100% to 20%
        mimaneraText.style.width = `${maxWidthDecrease}%`;
       
      }
      else{
        mimaneraText.style.width = '15%';
      }

     
    }else if (isInSection2) {
      mimaneraText.style.width ="15%"
    } else if (isInSection3) {
      mimaneraText.style.width ="10%"
    }  



   

   
  }
