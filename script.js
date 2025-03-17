containerWidth = 800;
gridSize = 16

gridContainer = document.querySelector("#grid");
createPixelsGrid(gridSize);

gridContainer.addEventListener("mouseover", (e) => {
    if(isRandomColor && !isDarken){
        randRed = Math.floor(Math.random()*256);
        randGreen = Math.floor(Math.random()*256);
        randBlue = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
        e.target.style.opacity = "1";
    } else if(isDarken && !isRandomColor){
        e.target.style.backgroundColor = "#f4a6b8";
        currentOpacity = parseFloat(e.target.style.opacity);
        e.target.style.opacity = `${currentOpacity + 0.1}`;
    } else if(isDarken && isRandomColor){
        randRed = Math.floor(Math.random()*256);
        randGreen = Math.floor(Math.random()*256);
        randBlue = Math.floor(Math.random()*256);
        currentOpacity = parseFloat(e.target.style.opacity);
        e.target.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
        e.target.style.opacity = `${currentOpacity + 0.1}`;
    } else if (!isDarken && !isRandomColor){
        e.target.style.backgroundColor = "#f4a6b8";
        e.target.style.opacity = "1";
    }
})

resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    gridSize = prompt("Enter the ize of the new grid");
    gridSize>100 ? gridSize=100 : gridSize;
    deletePixelsGrid()
    createPixelsGrid(gridSize);
})

randomButton = document.querySelector("#random-color");
isRandomColor = randomButton.checked;
randomButton.addEventListener("change", (e) => {
    isRandomColor = randomButton.checked;
})

darkenButton = document.querySelector("#darken");
isDarken = darkenButton.checked;
darkenButton.addEventListener("change", (e) => {
    isDarken = darkenButton.checked;
})

function createPixelsGrid(gridSize){
    for(let i=0; i<gridSize**2; i++){
        newPixel = document.createElement("div");
        newPixel.style.width = `${containerWidth/gridSize}px`
        newPixel.style.aspectRatio = "1";
        newPixel.style.opacity = "0";
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