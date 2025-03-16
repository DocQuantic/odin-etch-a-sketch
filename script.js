gridSize = 16

createPixelsGrid(gridSize);

function createPixelsGrid(gridSize){
    gridContainer = document.querySelector("#grid");
    for(let i=0; i<gridSize**2; i++){
        newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        newPixel.setAttribute("id", `pixel-${i}`);
        gridContainer.appendChild(newPixel);
    }
}