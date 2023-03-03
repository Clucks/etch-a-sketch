let square = document.querySelectorAll(".square");

console.log(square);



for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function() {
        square[i].style.backgroundColor = "black";
    });
}