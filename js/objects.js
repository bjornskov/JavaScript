// When using/writing " document. " you get a list of possibilities to choose from. If Using WebStorm, an icon on the left will have a color and character. Blue is a variable(properties) and red are methods(functions).
// document.

// Examples of objects we could use in JavaScript - which are created by other people we can use freely.

var div = document.getElementById("test");

div.innerHTML = "test code for innerHTML placed by JavaScript";

// alert(div);



// Lets create our own object
/*var person = {
    name: "Kristian",
    surname:"Wittrup",
    age:34,
    isAdult: function()
    {
        if (this.age < 18)  // when using this.age instead of just "age", it is pointing to the closest variable that have the name age. Which in this case is what we want.

            return false;

        return true;

    },
    toString: function()
    {
        return this.name + " " + this.surname; //
    }
};
*/

// We dont want to use alert anymore now - we have just use innerHTML to show it, so lets try it that way
//alert(person.name + " " + person.surname);

// now we are using the div id = persondata to target which div, then using innerHTML that is a usable object and = that to person, which is our object/string above

//persondata.innerHTML = person + " is older then 18. Is that correcto? <br> " + person.isAdult();


// The above line returns person name+surname, and checks if age is over or under 18 and sends a true/false


// Using a class we can "reuse" the template/form as before to create many user with different inputs, instead of having to write var person1, then var person2, and so on.
// So a function constructor could look like this

function person(name, surname, age, website)    // just like our document.getElementById();... the function name must be created somewhere in the JavaScript before this could be used. We already created a var Person = {...}
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.website = website;

    this.toString = function()
    {
        return this.name + " " + this.surname + " " + this.age + " &nbsp &nbsp " + this.website; //
    };
}

var x = new person ("Kristian", "Wittrup", "34", "www.somewhereovertherainbow.com");
var y = new person ("Helmut", "Lotti", "24", "www.somewhereingermany.de");
var z = new person ("Elvis", "Da King", "14", "Whatever_he_rocks.com");

// Protoype - prelimanary model. Good when using fx jQuery and you want to change something, but dont have access to all of the code. So we added it to the class in this case.
person.prototype.somethingNew = 5;

//personconstructor.innerHTML = x["age"];  // or x.age
personconstructor.innerHTML = x + "<br>" + y + "<br>" + z;

// Prototyping div block
personconstructor_prototype.innerHTML = x.somethingNew + "<br>" + y.somethingNew + "<br>" + z.somethingNew;

// Now we are reusing our class template/form and only using 1 variable for each entry we need to push in. We could make it smarter by using an Array. But we get to that later. :)
// Yay!
