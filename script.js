const gridDiv = document.querySelector('.grid');
const mainBody = document.querySelector('body');

paint = 'black';

function hoverOver(e) {
    console.log(this.style.backgroundColor);
    if (this.style.backgroundColor == "") {
        if (paint == "rainbow") {
            this.style.backgroundColor = getRandomColor();
        } else if (paint == "black") {
            this.style.backgroundColor = "black";
        }
        
    }
    return;
}

function resetBoard() {
    newSize = null;
    autoAmount = "";
    gridSquares.forEach(gridsquare => gridsquare.style.backgroundColor = "white");
    newSize = prompt("What size canvas do you want? (e.g 16x16, enter 16)","16");
    while (!(newSize <= 100) || !(newSize >= 1)) { 
        newSize = prompt("Please enter a value between 1 and 100.","16");
    }
    for (i = 0; i < newSize; i++) {
        autoAmount = autoAmount + " auto";
    }
    gridDiv.style.gridTemplateColumns = autoAmount;
    gridDiv.style.gridTemplateRows = autoAmount;
    gridSquares.forEach(gridsquare => gridDiv.removeChild(gridsquare));
    for (i = 0; i < (newSize*newSize); i++) {
            newDiv = document.createElement("div");
            newDiv.className = "gridsquare";
            gridDiv.appendChild(newDiv);
    }
    refreshGridsquares();
    return;
}

function buttonCheck(e) {
    if (e.target.className !== 'btn') return;

    if (e.target.id == 'reset') {
        resetBoard();
    } else if (e.target.id == 'rainbow') {
        paint = 'rainbow';
        e.target.innerHTML = 'Black Paint';
        e.target.id = 'black';
    } else if (e.target.id == 'black') {
        paint = 'black';
        e.target.innerHTML = 'Rainbow Paint';
        e.target.id = 'rainbow';
    }
    return;
}

function refreshGridsquares() {
    gridSquares = document.querySelectorAll('.gridsquare');
    gridSquares.forEach(gridsquare => gridsquare.addEventListener('mouseover', hoverOver));
    return;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

for (i = 0; i < 256; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "gridsquare";
    gridDiv.appendChild(newDiv);
    refreshGridsquares();
}

mainBody.addEventListener('click', buttonCheck);