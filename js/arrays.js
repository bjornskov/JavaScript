// Lets create an array and use it
var products = [
    "HTML",        // 0
    "CSS",         // 1
    "JavaScript",  // 2
    "Database",    // 3
    "Cookies"      // 4
];   // the [] is the way we write/start an Array in JavaScript


// lets add something to the arrays :)
// products[5] = "jQuery";        // here we are adding another. but we have to know which number to use so we dont override another product.

// Let us do a more dynamic version
//products[products.length] = "jQuery";

// We can also do a "push"
//products.push("mySQL");


//alert(products);  // Prints out the CSS because it is the number 1. HTML is number 0.


// By using the next lines you can access the value of your ul>li to change or update your content
//var programmingskills = document.getElementById("programmingskills").getElementsByTagName("li"); // change "programmingskills to webdevskills and see what happens.

//alert(programmingskills[programmingskills.length-1].innerHTML);  // So now we are returning(showing) the result of the last <li>. Which in this case is "Java".


// Lets check out some more useful Array Methods
// Working with Arrays. Lets create 2 arrays and use them. We are using the <div id="result"></div> created in the HTML as the area to populate with data
var classCourses = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Web Development",
    "PhP",
    "SEO"
];

var numbers = [
    4, -54, 23, 12, 12, 55
];

// .join - is used to join elements by sending arguments. Check it out below - and try to remove the .join("<br>") and test again.
//document.getElementById("result").innerHTML = classCourses.join("<br>") + " <br> <br>" + numbers;  // .join will automatically do a break after each entry that is made by javascript. Super awesome :). You can ofcourse leave it out and each entry will be separate by a comma instead


// Using join to join elements in the div
//document.getElementById("result").innerHTML = classCourses.join("<br>"); // Making the array show in the div
//document.getElementById("result").innerHTML += "<br> ---------"; // Adding an Operator ( += ) add a break<br> and dashes after the last item.
//document.getElementById("result").innerHTML += "<br>" + numbers; // And now we also add the array numbers to the same div. If we remove the += and just type = it will overwrite the other things


// We can make our code a bit better by placing the concat in a variable. like so;
//classCourses = classCourses.concat(numbers); // now we just use the "classCourse" which = classCourse.concat(numbers) as a variable throughout our script. :)
// concat
//document.getElementById("result").innerHTML = classCourses + "<br>"; // now we are simply connecting the two arrays together
//document.getElementById("result").innerHTML += classCourses.join("<br>") + "<br>"; // now we are connecting the two arrays together and using join to separate them items with a break<br> :)

// sorting numbers
//document.getElementById("result").innerHTML += numbers.sort(function(a, b){return a - b;}); // by switching the a - b to b - a, we sort in the other way :)

// Slicing
//document.getElementById("result").innerHTML += classCourses.slice(1, 3);

// Splice
//document.getElementById("result").innerHTML = classCourses.splice(1, 4);