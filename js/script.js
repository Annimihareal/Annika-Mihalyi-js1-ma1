/* Question 1
Creating an object called cat. Giving the object a property called complain, 
and adding a method (function) as a value, which logs the string "Meow!". */
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();



/* Question 2
Selecting h3 from the HTML using the querySelector,
assigning it to a variable called heading and 
changing its innerHTML value to "updated heading". */  
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

/* Using either heading or heading.innerHTML in the console log, will change the 
innerHTML value to "Updated heading". However I avoid adding .innerHTML in the 
console.log so the properties and values of the H3 tag can be easily accessed in 
the browser console (and to check the answers to question 3 & 4 below). */
console.log(heading);



/* Question 3
Using the style property on the heading variable from the question above to 
change its font size to "2em" */
heading.style.fontSize = "2em";



/* Question 4
Adding a class to the heading variable called subheading */
heading.className = "Subheading";



/* Question 5 
Writing code that selects all the p elements on a page and assigning them to
a variable called paragraphs. */
const paragraphs = document.querySelectorAll("p");

/* Looping through the p elements and changing the colour of each to "red". */
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// console.log(paragraphs);



/* Question 6
Selecting the div with a class of results, assigning it to a variable called
resultsContainer and setting its inner HTML to be <p>New Paragraph</p> and
its background to be yellow. */
resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.background = "yellow";

// console.log(resultsContainer);



/* Question 7 
Creating a function that has one parameter called list. Inside the function, 
looping through the list parameter and console logging the name property in
each object. Calling the function and passing in the cats variable in the 
script.js file from the repo.*/
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function createListOfNames(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);  
    }
}

createListOfNames(cats);



/* Question 8
Creating a function called createCats with one parameter called cats. Inside the 
function looping through the value passed in as cats and creating HTML for each
object in the array. Using the array from repo above */
function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {
        // console.log(cats[i]);

/* If the age property is missing, it displays "Age unknown" */
        let ageMissing = "Age unknown";

        if(cats[i].age === undefined) {
            cats[i].age = ageMissing;
        }

/* Wrapping each item in a div, each name property in an h5 tag and each age 
property in a p tag. */
        html += `<div class="cat-container">
                    <h5>${cats[i].name}</h5>
                    <p>${cats[i].age}</p>
                </div>`;
    }

    return html;
}

/* Calling the function and passing in the cats array as the argument.*/
const newHTML = createCats(cats);

/* Assogmomg the return value of the function to the innerHTML property of the 
element on the HTML page with a class of cat-contaienr */
const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = newHTML;
