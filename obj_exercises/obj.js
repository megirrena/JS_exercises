//1.Write a JavaScript program to get the length of a JavaScript object
const myObject = { a: 1, name: "megi", c: true };

const objectLength = Object.keys(myObject).length;
document.getElementById("result").innerText =
  "Length of Object: " + objectLength;
console.log(objectLength);

//2.Write a JavaScript program to list the properties of a JavaScript object
let propertiesString = "";
Object.keys(myObject).forEach((key) => {
  propertiesString += key + ": " + myObject[key] + "<br>";
});
document.getElementById("obj").innerHTML = propertiesString;
console.log(myObject);

//3.Write a JavaScript program to delete the rollno property from the following object.Print the object after deleting the property.
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

delete student.rollno;
let newObject = "";
Object.keys(student).forEach((key) => {
  newObject += key + ": " + student[key] + "<br>";
});
document.getElementById("del").innerHTML = newObject;
console.log(student);

//4.Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

let booksDiv = document.getElementById("books");
library.forEach((book) => {
  let paragraph = document.createElement("p");

  paragraph.textContent =
    "Book: " +
    book.title +
    ", Author: " +
    book.author +
    ", Reading Status: " +
    (book.readingStatus ? "Read" : "Unread");

  booksDiv.appendChild(paragraph);
});

console.log(library[0].readingStatus);
