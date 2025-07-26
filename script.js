const appContainer = document.querySelector('.app-container')
const colorMenu = document.querySelector('.color-menu')
const gridContainer = document.querySelector('.grid-container')
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
  "transparent"     // special value
];

let currentColor

for(let color of colors) {
    const colorItem = document.createElement('div')
    colorItem.classList.add('color-item')
    colorItem.style.backgroundColor = color
    colorMenu.appendChild(colorItem)
    colorItem.addEventListener('mousedown', (e) => {
        currentColor = e.target.style.backgroundColor
        console.log(currentColor)
    })
    

}


for(let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div')
    gridItems.push(gridItem)
    gridContainer.appendChild(gridItem)
    gridItem.classList.add('grid-items')
    gridItem.addEventListener('mousedown', paintTheGrid)
    gridItem.addEventListener('mouseenter', paintTheGrid)

    
}


let isPainting = false

function paintTheGrid(e) {
    if(isPainting || e.type === 'mousedown') e.target.style.backgroundColor = currentColor
}

// function addOrRemoveEventListener(){
//     for(let gridItem of gridItems) {
//         isPainting ? gridItem.addEventListener('mouseenter', paintTheGrid) : gridItem.removeEventListener('mouseenter', paintTheGrid)
//     }

// }

function clearAll(e) {
    if(e.key.toLowerCase() === 'c') {
        for(let gridItem of gridItems) {
            gridItem.style.backgroundColor = 'white'
        }
            
        
        
    }
}



document.addEventListener('mousedown', (e) => {
    e.preventDefault()
    isPainting = true
    // addOrRemoveEventListener()
    console.log(isPainting)
})


document.addEventListener('mouseup', () => {
    isPainting = false
    // addOrRemoveEventListener()
    console.log(isPainting)
})

document.addEventListener('keydown', clearAll)