const gridContainer = document.querySelector('.grid-container')

for(let i = 0; i < 16 * 16; i++) {
    let gridItem = document.createElement('div')
    gridContainer.appendChild(gridItem)
    gridItem.classList.add('grid-items')
    
}

const gridItems = document.querySelectorAll('.grid-items')



function paintTheGrid(e) {
    e.target.style.backgroundColor = 'red'
}
for(let gridItem of gridItems) {
    gridItem.addEventListener('mousedown', paintTheGrid)
}