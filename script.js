const gridContainer = document.querySelector('.grid-container')

for(let i = 0; i < 16 * 16; i++) {
    let gridItem = document.createElement('div')
    gridContainer.appendChild(gridItem)
    gridItem.classList.add('grid-items')
    
}

const gridItems = document.querySelectorAll('.grid-items')
let isPainting = false

addEventListener('mousedown', () => {
    isPainting = true
    addOrRemoveEventListener()
    console.log(isPainting)
})
addEventListener('mouseup', () => {
    isPainting = false
    addOrRemoveEventListener()
    console.log(isPainting)
})


function paintTheGrid(e) {
    e.target.style.backgroundColor = 'red'
}

function addOrRemoveEventListener(){
    for(let gridItem of gridItems) {
        isPainting ? gridItem.addEventListener('mouseenter', paintTheGrid) : gridItem.removeEventListener('mouseenter', paintTheGrid)
    }

}

function clearAll(e) {
    if(e.key.toLowerCase() === 'c') {
        for(let gridItem of gridItems) {
            gridItem.style.backgroundColor = 'white'
        }
            
        
        
    }
}

addEventListener('keydown', clearAll)