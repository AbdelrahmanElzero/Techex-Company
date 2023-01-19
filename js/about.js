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


let monthButton = document.getElementById('month')
let yearButton = document.getElementById('year')

let monthPlan = document.querySelectorAll('.plan .month')
let yearPlan = document.querySelectorAll('.plan .year')
yearButton.addEventListener('click', function(){
  yearButton.classList.add('active')
  monthButton.classList.remove('active')
  monthPlan.forEach((plan) => plan.style.display = 'none');
  yearPlan.forEach((plan) => plan.style.display = 'flex')
})

monthButton.addEventListener('click', function(){
  monthButton.classList.add('active')
  yearButton.classList.remove('active')
  yearPlan.forEach((plan) => plan.style.display = 'none');
  monthPlan.forEach((plan) => plan.style.display = 'flex')
})
