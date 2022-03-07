let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let grid = document.getElementById("grid");

    console.log(numRows)

    if (numRows === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function () {
            this.style.backgroundColor = colorSelected
            console.log(colorSelected)
        };
        row.appendChild(col);
        grid.append(row);
        numRows++
        numCols++
    }

    else {
        let row = document.createElement("tr")
        for (let i = 0; i < numCols; i++) {
            let col = document.createElement("td")
            col.onclick = function () {
                this.style.backgroundColor = colorSelected
                console.log(colorSelected)
            };
            row.appendChild(col);
        }
        grid.append(row);
        numRows++;
    }
}

//Add a column
function addC() {
    let grid = document.getElementById("grid");

    console.log(numCols);

    if (numRows === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function () {
            this.style.backgroundColor = colorSelected
            console.log(colorSelected)
        };
        row.appendChild(col);
        grid.append(row);
        numRows++
        numCols++
    }

    else {
        let rows = document.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            let node = document.createElement("td");
            node.onclick = function () {
                this.style.backgroundColor = colorSelected
                console.log(colorSelected)
            };
            rows[i].append(node);
        }
        numCols++
    }
}

//Remove a row
function removeR() {
    if (numRows !== 0 ){
        if (numRows === 1) {
            let grid = document.getElementById("grid")
            grid.innerHTML = ""
            numRows = 0
            numCols = 0
            return
        }

        let rows = document.getElementsByTagName("tr")
        rows[rows.length - 1].remove()
        numRows--
    }
    console.log(numRows)
}
//Remove a column
function removeC() {
    if (numCols !== 0) {
        if (numCols === 1) {
            let grid = document.getElementById("grid")
            grid.innerHTML = ""
            numRows = 0
            numCols = 0
            return
        }

        let rows = document.getElementsByTagName("tr")
        for (let i = 0; i < rows.length; i++) {
            rows[i].removeChild(rows[i].lastChild)
        }
        numCols--
    }
    console.log(numCols)
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}
//Fills all cells with selected color
function fill(){
    let nodes = document.getElementsByTagName("td")
    colorSelected = document.getElementById("selectedID").value;
    for (let i =0; i < nodes.length; i++){
        nodes[i].style.backgroundColor = colorSelected
    }
}
//Clears grid
function clearAll(){
   let grid = document.getElementById("grid");
   grid.innerHTML = ""
   numRows = 0
   numCols = 0
}
//Fills all uncolored tiles
function fillU(){
    let nodes = document.getElementsByTagName("td")
    colorSelected = document.getElementById("selectedID").value;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].style.backgroundColor === "") {
            nodes[i].style.backgroundColor = colorSelected
        }
    }
}

 