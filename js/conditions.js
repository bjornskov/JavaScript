
// if (5 > 3)
//    alert("test if it is true");

var a = 2,   // try changing a to something lower then b
    b = 3;


// Conditional Statement checking if something is true or false and showing the correct alertbox after.
/*
if(a > b)  // a must be bigger then b
    alert(a +  " is bigger then " + b);

else if(a < b)  // a must be lower then a
    alert(a + " is lower then " + b);

else  // a must be the same as b
    alert("a == b");
*/

// This is a conditional statement going further on with the previous declaration about "a > b" and doing something else if it is not true
/*if(a > b)
    alert(a +  " is bigger then " + b);

else
    alert(a + " is not bigger then " + b + " so it is not true")
    ;
*/

// Using more then one action in a conditional statement requires using {  } to contain them to the specific statement. if not used the last alertbox will be shown on both true and false
// Try removing the { }  and changing the value of a and b to test.
/*
if (a > b)
    alert("a is bigger");

else if (a < b)
{
    alert("a is smaller");
    alert("wuut two alert?");
}
else
    alert("a == b");
*/

// NB just use curly bracket { } all the time. :)





//////////////  Shortened conditional statement called operator ? :     ( so the character ? and : )
// expression ? return_if_the_expression_is_true
// expression : return_if_the_expression_is_false

// Example

var x = 2;
var isEven;
/*
if (x % 2 === 0)   // We want to check if there is a remainder and then equals 0.
    isEven = true;
else
    isEven = false;

alert(isEven);
*/

// Now we want to do it in a shortened conditional statement.
// example 1:
//
// alert((x % 2 === 0) ? true : false);
//
// Improved version with telling something more then just true or false:
// alert((x % 2 === 0) ? "The value is even" : "the value is not even");
//

// example 2:
// var isItEven = (x % 2 === 0) ? true : false;
// alert(isItEven);

///////////// Switch statement  (toggle)
/*
var dayOfWeek = 1;
switch (dayOfWeek)
{
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wedneysday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;
    default:
        alert("Not a workday of the week")
        break;
}
*/
// the break; stops it from executing the other cases you might have or it will go through every case there is