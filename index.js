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

let purple = document.createElement('div')
purple.setAttribute('class', 'color-choice')
purple.setAttribute('id', 'purple')
purple.textContent = '■'
purple.style.color = 'purple'
palette.append(purple)

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
purple.addEventListener('click', function(){
    selectedColor = 'purple'
})

let button = document.createElement('button')
button.textContent = 'Clear'
palette.append(button)

let pixels = document.querySelectorAll('.pixel')
button.addEventListener('click', function(){
    pixels.style.backgroundColor = 'white'
})