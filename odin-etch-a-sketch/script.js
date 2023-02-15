let boxes = [];

function generateGrid(n) {
    const parent = document.querySelector(".container");

    parent.style["grid-template-columns"] = `repeat(${n}, auto)`;
    
    for(let i = 0; i < n; i++) {
        for(let i = 0; i < n; i++) {
            const div = document.createElement('div');
            div.classList.add("box");
            div.addEventListener("mouseover", (e) => {
                div.classList.add("hover");
            });
            boxes.push(div);
            parent.appendChild(div);
        }
    }
}

function destroyGrid() {
    const parent = document.querySelector(".container");

    boxes.forEach(e => {
        parent.removeChild(e);
        e.remove();
    });
    boxes = [];
}


const button = document.querySelector(".resize");
button.addEventListener("click", (e) => {
    let dims = prompt("Enter your desired dimensions:");
    if(!dims || dims > 100) {
        alert("Please select dimensions under 100 by 100");
        return;
    }
    destroyGrid();
    generateGrid(dims);
});

generateGrid(16);