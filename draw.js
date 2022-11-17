const ColorDefault = 'black'
const SizeDefault = 16

let color = ColorDefault
let size = SizeDefault

function setColor(newColor) {
    color = newColor
}

function setSize(newSize) {
    size = newSize
}
/*DOM elements */
let colorpicker = document.querySelector('#color')
let container = document.getElementById('paper')
let clear = document.querySelector('.clear')
let divs = document.querySelectorAll('.div')
let rangeslider = document.querySelector('#range-slider')

window.addEventListener('load', () => {
    createPaper(SizeDefault) 
    
})
    /* Event listeners */

    colorpicker.addEventListener('input' , (e) =>
    setColor(e.target.value))
    

    clear.addEventListener('click', () =>
   ReloadPaper() )

  
   rangeslider.addEventListener('change', (e) =>
   changeSize(e.target.value))
    
  function changeSize(value) {
    setSize(value)
    ReloadPaper()

  }

  function ReloadPaper() {
    clearPaper()
    createPaper(size)
  }

  function clearPaper() {
    container.innerHTML = ''
    
}


    /* Enable/disable drawing */
let drawingEnabled = false
document.body.addEventListener('mousedown', () =>
    drawingEnabled = true)

   document.body.addEventListener('mouseup', () =>
    drawingEnabled = false)



/* creating the size of the drawint */
function createPaper(size) {

    container.style.gridTemplateColumns = `repeat(${size},1fr)`
    container.style.gridTemplateRows =  `repeat(${size},1fr)`
    let length = size ** 2

for(let i=1 ; i<=length; i++) {
    const div = document.createElement('div')
   
    div.classList.add('div')
    div.style.width = 300 / length
    div.style.height = 300 / length
    div.addEventListener('mouseover' , changeColor)
      div.addEventListener('mousedown', changeColor)
      container.appendChild(div)
    
}




    

   
function changeColor(e) {
    
    
if (e.type === 'mouseover' && drawingEnabled ) {
    e.target.style.backgroundColor = color
   
   
}
}
}





