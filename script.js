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
  });