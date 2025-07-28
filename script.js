const appContainer = document.querySelector('.app-container')
const colorMenu = document.querySelector('.color-menu')
const gridContainer = document.querySelector('.grid-container')
const paintButton = document.querySelector('.paint-button')
const eraserButton = document.querySelector('.eraser-button')
const gridItems = []
const colors = [
  "white",          // #FFFFFF
  "black",          // #000000
  "gray",           // #808080
  "lightgray",      // #D3D3D3
  "darkgray",       // #A9A9A9
  "red",            // #FF0000
  "darkred",        // #8B0000
  "green",          // #008000
  "lime",           // #00FF00
  "darkgreen",      // #006400
  "blue",           // #0000FF
  "darkblue",       // #00008B
  "lightblue",      // #ADD8E6
  "navy",           // #000080
  "teal",           // #008080
  "aqua",           // #00FFFF
  "cyan",           // #00FFFF
  "purple",         // #800080
  "violet",         // #EE82EE
  "pink",           // #FFC0CB
  "hotpink",        // #FF69B4
  "orange",         // #FFA500
  "darkorange",     // #FF8C00
  "yellow",         // #FFFF00
  "gold",           // #FFD700
  "brown",          // #A52A2A
  "beige",          // #F5F5DC
  "coral",          // #FF7F50
  "salmon",         // #FA8072
];

let currentColor = 'black'
let currentMode


for(let color of colors) {
    const colorItem = document.createElement('div')
    colorItem.classList.add('color-item')
    colorItem.style.backgroundColor = color
    colorMenu.appendChild(colorItem)    
    colorItem.addEventListener('mousedown', (e) => {
        currentColor = e.target.style.backgroundColor
        // e.target.style.border = '5px solid black'
    })
    

}


for(let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div')
    gridItems.push(gridItem)
    gridContainer.appendChild(gridItem)
    gridItem.classList.add('grid-items')
    gridItem.addEventListener('mousedown', handleStates)
    gridItem.addEventListener('mouseenter', handleStates)

    
}


let isPainting = false
let isErasing = false

function paintTheGrid(e) {
    if((isPainting || e.type === 'mousedown') && e.button === 0) e.target.style.backgroundColor = currentColor
}

function eraseTheGrid(e) {
    if((isErasing || e.type === 'mousedown') && e.button === 0) e.target.style.backgroundColor = 'transparent'
}





function handleStates(e) {
    switch(currentMode) {
        case 'paint':
            paintTheGrid(e)
            break
        case 'eraser':
            eraseTheGrid(e)
            break
    }
}

function clearAll(e) {
    if(e.key.toLowerCase() === 'c') {
        for(let gridItem of gridItems) {
            gridItem.style.backgroundColor = 'transparent'
        }
            
        
        
    }
}


function setButtonHighlights(e) {
    paintButton.classList.remove('isActive')
    eraserButton.classList.remove('isActive')

    e.target.classList.add('isActive')
}

paintButton.addEventListener('mousedown', (e) => {
    currentMode = 'paint'
    setButtonHighlights(e)
})
eraserButton.addEventListener('mousedown', (e) => {
    currentMode = 'eraser'
    setButtonHighlights(e)

})

document.addEventListener('mousedown', (e) => {
    if(e.button === 0) {
        e.preventDefault()
        switch (currentMode) {
            case 'paint':
                isPainting = true
                break
            case 'eraser':
                isErasing = true
                break

        }

        
}
})


document.addEventListener('mouseup', () => {
    switch (currentMode) {
        case 'paint':
            isPainting = false
            break
        case 'eraser':
            isErasing = false
            break
    }
})

document.addEventListener('keydown', clearAll)