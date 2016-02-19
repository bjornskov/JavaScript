// The variables are outside the functions which means the are globally, and all functions can use them. Put them inside a function and only that function can use them.
var x = 2,
    y = 3,
    z = 4,
    q = 5,
    a = 3,
    b = 3;



/*function test()
{
    return 5;
}
// putting a test(); just below invokes the page to load it as soon the JavaScript file loads.
//test();

//lets store the function as a variable and run it
var g = test();
    {
        alert(g);
    }
*/


function add(r, t) // Now we add r, t which are arguments and we are going to define the parameters of the function.
{
//var r = ,
//    t = ,
return r + t;

    }

function divide(r, t)
{
    if(t === 0) {
        return "You can not divide with zero"; // we are using a return; here to start the script here. So it does not continue because there is no point since we cant divide with 0 :)
    }

    else {
       return r / t; // the variable "t" could be 0, and we cant divide with zero so we need a if-statement to be executed if t=0.
    }
}

var sumOfVariables = add(3, 5);  // The arguments can also be variables you have created. For even more dynamic interaction.
var sumOfdVariables = divide(3, 6);

//  alert(sumOfdVariables);


// With JavaScript we can actually change the value of a variable within a function, but we can do a lockout.
function sample()
{
    var a;
    a = 5; // its is 3 on the global scope. Check top of file and see. This a is only available to this function. Means you can create a variable that is only usable inside a specific functions. (save memory of the computer running the script)
    alert(a);
}
// sample(); // try commenting this out and then the alert(a); and test a bit
// alert(a);


// How do we assign a function as an variable? As an anonymous
var f = function ()
{
    alert("this is an anonymous function");
};

// f();    // calls the function


// We can add an argument and call it together with the function
var f = function (arg1)
{
    alert("this is an anonymous function" + arg1);
};

//f(" bammm lady");    // calls the function



// Function that has a parameter as a function
// Why? Maybe you want to calculate and operating before using it. After calculation then you send/use it with your whatever you want.
function tt(ff, arg2)
{
    ff(10 + arg2); // this now invokes the function inside a function (+ the arg2 and adds them up)
}

/*
tt(
    function(xx) {
        alert("sample " + xx);
    },
    20
);
*/
// this type of scripting is usually mostly used in more advanced programming. :)  Frameworks you can use might use this.

// Function that returns
// Now we can return a function if a statement is true or false.
var hello = function(type)
{
    if(type === "lady")
        return function(name) {
            alert("Hello lady, " + name);
        };
    else
    return function(name) {
        alert("Hello not lady, " + name);
    };
};


var returnedFunction = hello("lady");  // here we use "lady" to make sure our type is executed. If we change the "lady" to something else, the statement will go the the "else" statement and return that instead.

// returnedFunction("Linda"); // we are also returning the "argument" which is Linda here. which means in this case that we assign "Linda" to the argument that is "name".
// This is again more advanced and return here when you get better at JavaScript. :)








// More example, that is familiar to our earlier work.
fGo = function(fGo) {
    if(a > b)
    {
        alert(a + " is higher then " + b);
    }
    else if(a < b)
    {
        alert(a + " is lower then " + b);
    }
    else
    {
        alert("a === b");
    }
}

// yet another function with conditional statements and CONJUNCTIONS (&&) (with means AND)
fNew = function(fNew) {
    if(x + y > z && q === 5) {
        alert("test");
    }
}

// fNew();   // this will run it.