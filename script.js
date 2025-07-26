const appContainer = document.querySelector('.app-container')
const colorMenu = document.querySelector('.color-menu')
const gridContainer = document.querySelector('.grid-container')
const gridItems = []
const colors = ['red', 'blue', 'green', 'yellow']

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