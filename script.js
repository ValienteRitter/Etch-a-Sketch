const gridContainer = document.querySelector('.grid-container')

for(let i = 0; i < 16 * 16; i++) {
    let gridItem = document.createElement('div')
    gridContainer.appendChild(gridItem)
    gridItem.classList.add('grid-items')
    
}