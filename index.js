let selectedColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'
})

let palette = document.querySelector('.palette')

let blue = document.querySelector('#blue')
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let green = document.querySelector('#green')

blue.addEventListener('click', function(){
        selectedColor = 'blue'
})
red.addEventListener('click', function(){
    selectedColor = 'red'
})
yellow.addEventListener('click', function(){
    selectedColor = 'yellow'
})
green.addEventListener('click', function(){
    selectedColor = 'green'
})