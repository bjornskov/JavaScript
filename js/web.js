
var product_names = [
      {
      "type": "Sneakers", // new property for this object
      "price": 250
      },
      {
      "type": "Boots", // new property for this object
      "price": 350
      }

      /*  "Sneakers",
        "Boots",
        "High Heels",
        "Dressshoes" */
    ];

    var product_price = [
        "200",
        "300",
        "400",
        "500"
    ];

    document.getElementById("listproduct").innerHTML = product_names[0].type + product_names[0].price;
    document.getElementById("listproduct").innerHTML += "<br>";
    document.getElementById("listproduct").innerHTML += product_names[1].type + product_names[1].price;


/*




//net is without the tax on products "Shoes" and "TV". We name the variable of these two in the following way and assign a price for each.
var netPriceOfShoes = 104;
var netPriceOfTV = 900;

var nameOfShoes = "Sneakers";

var product_names = [
    "Sneakers",
    "Boots",
    "High Heels",
    "Dressshoes"
];

var product_price = [
    "200",
    "300",
    "400",
    "500"
];


var result = document.getElementById("result");
var result2 = document.getElementById("result2");

document.getElementById("name").innerHTML = nameOfShoes;
document.getElementById("price").innerHTML = grossPriceOfShoes;


var i = 0; // initializing variable i. So i know where to start from.

while(i < product_names.length && i < product_price.length) // Breakdown. "i" starts from 0, which is the "HTML" or [0]. Then continues to run because we have that when "i" is smaller then "classCourses.length"(which is converting it into a number) we just run the loops as many times as the array is long and no more.
{

    result.innerHTML += product_names[i];
    result2.innerHTML += product_price[i];

    i++;
}


// Variable of VAT (that can also differ from each country) in this case it is a tax of 23% - we calculate the % later. We can now just change this so see the new prices
var VAT = 23;

//calculation of our VAT - here we calculate the %
var calculatedVAT = (1 + VAT * 1/100);


// But we still use the (1 + VAT * 1/100) which is not 100% dynamic - we should fix this
var grossPriceOfShoes = netPriceOfShoes * calculatedVAT;







var div = document.getElementById("test");

div.innerHTML = "";


function person(name, surname, age, website)    // just like our document.getElementById();... the function name must be created somewhere in the JavaScript before this could be used. We already created a var Person = {...}
{
    this.name = name;
    this.surname = surname;



    this.toString = function()
    {
        return this.name + " " + this.surname; //
    };
}

var x = new person ("Kristian", "Wittrup");
var y = new person ("Helmut", "Lotti");
var z = new person ("Elvis", "Da King");

//personconstructor.innerHTML = x["age"];  // or x.age
personconstructor.innerHTML = x + "<br>" + y + "<br>" + z;
*/
