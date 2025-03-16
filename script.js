containerWidth = 800;
gridSize = 16

gridContainer = document.querySelector("#grid");
createPixelsGrid(gridSize);

function createPixelsGrid(gridSize){
    for(let i=0; i<gridSize**2; i++){
        newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        newPixel.style.cssText = `width: ${containerWidth/gridSize}px; aspect-ratio: 1;`;
        newPixel.setAttribute("id", `pixel-${i}`);
        gridContainer.appendChild(newPixel);
    }
}

function deletePixelsGrid(){
    pixels = document.querySelectorAll(".pixel");
    console.dir(pixels);
    for(pixel of pixels){
        console.dir(pixel);
        pixel.remove();
    }
}

gridContainer.addEventListener("mouseover", (e) => {
    e.target.classList.add("hovered");
})

resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    gridSize = prompt("Enter the ize of the new grid");
    deletePixelsGrid()
    createPixelsGrid(gridSize);
})