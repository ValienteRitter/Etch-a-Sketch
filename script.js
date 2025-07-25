const gridContainer = document.querySelector('.grid-container')
const gridItems = []


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
    if(isPainting || e.type === 'mousedown') e.target.style.backgroundColor = 'red'
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