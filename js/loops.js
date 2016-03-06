var classCourses = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Web Development",
    "PhP",
    "SEO"
];


var result = document.getElementById("result");
var result_second = document.getElementById("result_second");
var result_bc = document.getElementById("result_bc");

// One way to write all out is to do this -> not the most clever way though
/*
result.innerHTML += classCourses[0]+"<br>";
result.innerHTML += classCourses[1]+"<br>";
result.innerHTML += classCourses[2]+"<br>";
result.innerHTML += classCourses[3]+"<br>";
result.innerHTML += classCourses[4]+"<br>";
result.innerHTML += classCourses[5]+"<br>";
*/

// Let try and create a loop instead that just goes through all the elements. In this case the array.

var i = 0; // initializing variable i. So i know where to start from.

while(i < classCourses.length) // Breakdown. "i" starts from 0, which is the "HTML" or [0]. Then continues to run because we have that when "i" is smaller then "classCourses.length"(which is converting it into a number) we just run the loops as many times as the array is long and no more.
{
   // if(classCourses[i] === "JavaScript")  // We can even statement here saying if a item in the array is equal to "JavaScript" we want to add something more (in the next line of code) and only to that specific item.
   //     result.innerHTML += "<br>Im added because an IF statement just before the :<br> ";
    result.innerHTML += classCourses[i] + "<br>";

    i++;
}



// Now we are taking the HTML writing content and using that as our array and printing out results. If we add to the <li> in our html it will be added here aswell.
// Why? - because instead of "printing"/result it for us to see, we could be sending this information to a database or pricerunner(needs more code, but the concept it the same)
/*
var programmingskills = document.getElementById("programmingskills").getElementsByTagName("li");
var i = 0;

while(i < programmingskills.length)
{
    var result_second = document.getElementById("result_second");
    result_second.innerHTML += programmingskills[i].innerHTML + "<br>";

    i++;
}
*/

// Lets try and make a function so we can easily print more then one course without having to copy the code for each course to do so, but only by adding 1 new line for each course. :) . Poaw!
/*
function printCourses(idOfUlList) {

    var courses = document.getElementById(idOfUlList).getElementsByTagName("li");
    var i = 0;

    while(i < courses.length)
    {

        result_second.innerHTML += courses[i].innerHTML + "<br>";

        i++;
    }

}

printCourses("webdevskill");
printCourses("programmingskills");
*/


// Let test the dowhile loop
/*
function printCourses(idOfUlList) {

    var courses = document.getElementById(idOfUlList).getElementsByTagName("li");
    var i = 2352;

    do{ // The dowhile loops will run atleast once, even if the expression is not true. i < course.length is actually equal to i(2352) is < course.length(3) = false statement. But it will still run once.
        result_second.innerHTML += courses[0].innerHTML + "<br>";
        i++;
    }
    while(i < courses.length)
    {

    }

}

printCourses("webdevskill");
printCourses("programmingskills");

*/

/*
function printCourses(idOfUlList) {

    var courses = document.getElementById(idOfUlList).getElementsByTagName("li");
    var i = 0;

    while(i < courses.length)
    {
        if (courses[i].innerHTML === "PhP" || courses[i].innerHTML === "YAML")
            result_second.innerHTML += "This is the languages our Web Developers will learn:  ";
        result_second.innerHTML += courses[i].innerHTML + "<br>";

        i++;
    }

}

printCourses("webdevskill");
printCourses("programmingskills");

    */


// For loops - looks alot like a while loops. Just a different name tbh.
/*
var i = 0;


for(;i < 5;)
{
    document.getElementById("result_for").innerHTML += i + "<br>";

    i++;
}
*/

// We can change the look of a for loop to this instead of the previous.
// We can use the ; in the for(;;) as separators for things that need to happen before, and then again after the loop. So setting the var "i" to 0, and doing increment after with i++
/*
for(var i = 0 ;i < 5 ;i++)
{
    document.getElementById("result_for").innerHTML += i + "<br>";

}
// Its cleaner and its all inside the loop now. They do the same though. So choose what you like.
*/

// Lets change the numbers to our classCourses instead.
/*
for(var i = 0 ;i < classCourses.length ;i++)
{
    document.getElementById("result_for").innerHTML += classCourses[i] + "<br>";

}
*/

// Break and continue
/*
for (var i = 0; i < 5; i++)
{
    //if (i === 2) // here we create a break when i equals 2. So it will print 0, 1 and no more.
    //    break;

    // if (i === 2) // continue is working like a break but after breaking once, the loop continues after. By using continue we basically just skip the number 2 and continue after it.
    // continue;

    document.getElementById("result_bc").innerHTML += i + "<br>";
}
    */

// Lets try something without numbers
/*
var webdevskill = document.getElementById("webdevskill").getElementsByTagName("li");

for (var i = 0; i < webdevskill.length; i++);
{
       webdevskill[i].innerHTML += "even";
}
*/
// Lets do something more - we want to implement an odd/even counter
/*
var programmingskills = document.getElementById("programmingskills").getElementsByTagName("li");

for(i = 0; i < programmingskills.length; i++)
{
    if(i  % 2 !== 0) // we tell that i % 2 !==(negative/opposite) 0, that it should start from another item. Try testing without the !== and using === instead
        programmingskills[i].innerHTML += " even ";  // prints out even in our <li> with programmingskills
    else
        continue;

}
*/
