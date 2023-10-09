
const innerCanvas = document.querySelector('.innerCanvas')
const changeGrid = document.querySelector('.changeGrid')
const main = document.querySelector('.main')
const blackColor = document.querySelector('.black')
const random = document.querySelector('.random')
let currentColor = '#000'

const reset = document.querySelector('.reset')


 function createGrid(gridSize){
     innerCanvas.setAttribute('style', `grid-template-columns: 
     repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)` )




     
const doubleGrid = gridSize * gridSize
    for(let i = 1; i < doubleGrid+1; i++){
        const div16 = document.createElement('div')
    
        innerCanvas.appendChild(div16)

    }
    
}


 
       
    






changeGrid.addEventListener('click', function(e){
const modal = document.createElement('div')
modal.setAttribute('style', `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 10;
width: 40%;
display: flex;
padding: 20px;
border: solid .1px black;
box-shadow: 0 .7px .7px black;
align-content: center;
justify-content: center;
min-height: max-content;
gap: 10px;
flex-direction: column;
background-color: #2e2c2c;;
border-radius: 5px;
`)
const modalInput = document.createElement('input')
const confirmGrid = document.createElement('button')

confirmGrid.setAttribute('style', `
width: max-content;
 border: none;
    padding: 8px;
    background-color: green;
    color: white;
    border-radius: 5px;
    margin: 0 auto
`)
confirmGrid.textContent = 'Confirm'
modalInput.setAttribute('style', `
border: none
padding: 10px;
color: '#2e2c2c;'

`)
modalInput.placeholder = 'Enter number: max 100'
modalInput.type = 'number';
modalInput.max = 100;
modalInput.min = 1;




modal.appendChild(modalInput)
modal.appendChild(confirmGrid)
main.appendChild(modal)

confirmGrid.addEventListener('click', ()=>{
    const inputValue = parseInt(modalInput.value)
    if(inputValue < 1 || inputValue > 100 || !inputValue) return
    

resetGrid()

    createGrid(inputValue)
changeGridColor(currentColor)
   main.removeChild(modal)
   
})
})

const changeGridFunction = () => {
const mainChild = main.childNodes
const modalNode = mainChild[1]

}

const resetGrid = () => {
     while(innerCanvas.hasChildNodes()){
      innerCanvas.removeChild(innerCanvas.firstChild)
 }
}


const changeGridColor = (color = '#000') => {

    const child = innerCanvas.childNodes

    Array.from(child).map(c => {
        c.addEventListener('mouseover', function(e)  {
            if(color === 'random'){
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
     c.setAttribute('style', `background-color: #${randomColor}`)
            }
            else{
 c.setAttribute('style', `background-color: #000; border: solid .1px #fff`)
            }
         
   
        })
})
}

blackColor.addEventListener('click', function(e){
    currentColor = '#000'
    changeGridColor(currentColor)
})

random.addEventListener('click', function(e){
    currentColor = 'random'
    changeGridColor(currentColor)
    
})

reset.addEventListener('click', () =>{
    resetGrid()
})






changeGridFunction()