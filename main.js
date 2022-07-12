let pops = document.querySelectorAll('.pop');

pops.forEach(pop => {
  pop.addEventListener('click',function(){
    pop.classList.toggle('active');
  })
})
