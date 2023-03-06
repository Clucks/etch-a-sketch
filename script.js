//Initial grid and sizing
const SIZE = 800;
const userInput = prompt("How long do u want the square?");   
const numDivs = userInput * userInput;
const grid = document.querySelector(".grid");

//initial grid squares and functionality
createSquares(grid, numDivs);
const squares = document.querySelectorAll('.square');
changeSquareStyling(squares, SIZE, userInput);
elementHoverEffect(squares);




//Adds functionality to the button
const button = document.querySelector("button");
button.addEventListener("click",function(){
    const userInput = prompt("How long do u want the new square?");   
    const numDivs = userInput * userInput;
    const SIZE = 800;
    const grid = document.querySelector(".grid");
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    createSquares(grid, numDivs);
    const squares = document.querySelectorAll('.square');
    changeSquareStyling(squares, SIZE, userInput);
    elementHoverEffect(squares);

});

/*
This method creates all the new squares in the grid

@parent the parent for the child

@numDivs # of squares
*/
function createSquares(parent, numDivs){
    for (let index = 0; index < numDivs; index++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "square");
        parent.appendChild(newDiv);
    }
    
}

/*
Changes the square styling

@child the array nodelist

@SIZE the give of parent grid

@userInput the num squares user wants
*/
function changeSquareStyling(child, SIZE, userInput){
    child.forEach(function(element){
        element.style.width = ((SIZE / userInput)- 2) + "px";
        element.style.height = ((SIZE / userInput) - 2) + "px";
        element.style.border = "1px solid black";
    });

    
}

/*
Changes the hover over squares

@childList the nodeList of children
*/
function elementHoverEffect(childList){
    for (let i = 0; i < childList.length; i++) {
        childList[i].addEventListener("mouseenter", function() {
        childList[i].style.backgroundColor = "black";
    });
}
}