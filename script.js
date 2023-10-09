
const innerCanvas = document.querySelector('.innerCanvas')

innerCanvas.setAttribute('style', `grid-template-columns: repeat(${256/16}, 1fr); grid-template-rows: repeat(${256/16}, 1fr)` )

 function createGrid(gridSize){

    for(let i = 1; i < gridSize+1; i++){
        const div16 = document.createElement('div')

        innerCanvas.appendChild(div16)

    }
}

const changeCellColor = (color) => {

const child = innerCanvas.childNodes


Array.from(child).map(c => {
    c.addEventListener('mouseover', (e) => {
       c.setAttribute('style', `background-color: ${color}`)
    })
})
}


createGrid(256)
changeCellColor('#000')