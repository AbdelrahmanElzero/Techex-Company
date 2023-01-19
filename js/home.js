$(document).ready(function(){
  $(".landing-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
  });
  $(".clients-feedback").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    nav: true,
    responsiveClass: true, 
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 1
      }, 
      1000:{
        items: 2,
        margin: 30
      }
    }
  });
  $(".case-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: true,
    responsiveClass: true, 
    responsive:{
      0:{
        items: 1
      },
      500:{
        items: 2,
        margin: 20
      },
      600:{
        items: 2,
        margin: 20
      },
      800: {
        items: 3,
        margin: 30

      },
      1000:{
        items: 4,
        margin: 30
      }, 
    }
  });
  
});


let videoPopUp = document.querySelector('.video-popup')

let playVideo = document.getElementById('playVideo')

let closeVideo = document.getElementById('closeVideo')

let body = document.querySelector('body')

playVideo.addEventListener('click', function(){
  videoPopUp.classList.add('active')
  body.style.overflow = 'hidden'
})

closeVideo.addEventListener('click', function(){
  videoPopUp.classList.remove('active')
  document.getElementById('my-video').muted = true
  body.style.overflow = 'scroll'
})


let statsSection = document.querySelector('.stats')
let counters = document.querySelectorAll('.item-text .counter')
let started = false 

function statsCounter(e){
  let countValue = e.dataset.val; 
  let count = setInterval(() =>{
    e.textContent++ 
    if(e.textContent == countValue){
      clearInterval(count)
    }
  }, 4000 / countValue)
}

window.onscroll = function(){
  if(window.scrollY >= statsSection.offsetTop - 400){
    if(!started){
      counters.forEach((counter) => statsCounter(counter))
    }
    started = true
  }
  toTop()
}

