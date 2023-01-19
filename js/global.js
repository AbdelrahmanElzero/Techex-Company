let activePage = window.location.pathname;
let navLinks = document.querySelectorAll('.nav-item .nav-link')
navLinks.forEach(navLink =>{
  if(navLink.href.includes(`${activePage}`)){
    navLink.classList.add('active')
  }
})

let navToggler = document.querySelector('.navbar-toggler')
navToggler.addEventListener('click', function (){
  if(!navToggler.classList.contains('collapsed')){
    navToggler.classList.add('active')
  }
  else{
    navToggler.classList.remove('active')
  }
})




function toTop(){
  if (window.scrollY >= 500){
    document.getElementById('toButton').classList.add('show')
  }
  else{
    document.getElementById('toButton').classList.remove('show')
  }
}

window.onscroll = function(){
  toTop()
}