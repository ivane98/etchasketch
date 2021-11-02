const container = document.querySelector('#container');
let cell;
let target; 
const reset = document.getElementById("reset");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

//makes cells(divs)

function makeCell (numCell) {
    for (let c = 0; c < numCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

//cells within each row. Example makeGrid(4,3), loop would run 4 times making  3 cells/colums per row each loop

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow); 
    container.style.setProperty('--numCols', numCol); 
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol);
    }
}
let choose = prompt('choose the dimension: ');
makeGrid(choose,choose);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeColor(target){
    target.style.backgroundColor = getRandomColor();
}

container.addEventListener('mouseover', function(e){
    target=e.target;
    if(target.matches('div.cell')){
        changeColor(target);
    }
});

reset.addEventListener('click', function(e){
    location.reload();
    
})


