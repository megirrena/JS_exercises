//Calculate the Area of a Rectangle:
// Write a function that takes the length and width of a rectangle as parameters and returns the area of the rectangle.
function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateArea() {
    const length = parseFloat(document.getElementById("lengthInput").value);
    const width = parseFloat(document.getElementById("widthInput").value);
    const area = calculateRectangleArea(length, width);
    document.getElementById("result").innerText = "The area of the rectangle is: " + area;
}