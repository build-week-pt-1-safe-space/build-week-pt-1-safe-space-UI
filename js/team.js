//team page hover
const cards = document.querySelectorAll('.card')


  
cards.forEach(card => {
    card.addEventListener('mouseover', function(e){
        card.classList.add('shadow-lg')
      })
})

cards.forEach(card => { 
    card.addEventListener('mouseleave', function(e){
        card.classList.remove('shadow-lg')
      })
})

