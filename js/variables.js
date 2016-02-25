/*Variable = "var" as shown below is the way we type a Variable in JavaScript - it can be used to store data of many sorts
fx: var nameOfVariable = 5 ; or

var x = 5;
var y = 7;

alert(x + y);
*/

//Variable
//We will try and create a dynamic VAT calculator to see prices/change tax value quick.

//net is without the tax on products "Shoes" and "TV". We name the variable of these two in the following way and assign a price for each.
var netPriceOfShoes = 104;
var netPriceOfTV = 900;

// Variable of VAT (that can also differ from each country) in this case it is a tax of 23% - we calculate the % later. We can now just change this so see the new prices
var VAT = 23;

//calculation of our VAT - here we calculate the %
var calculatedVAT = (1 + VAT * 1/100);


// adding the tax to these
var grossPriceOfTV = netPriceOfTV * 1.23;

// The following is a variable that is almost entirely run by variables. Lets make it 100% dynamic instead by adding the variable: VAT
// var grossPriceOfShoes = netPriceOfShoes * 1.23;



// more dynamic if we change the value of the tax to DK instead
//var grossPriceOfShoes = netPriceOfShoes * (1 + VAT * 1/100);
var grossPriceOfTV = netPriceOfTV * (1 + VAT * 1/100);


// But we still use the (1 + VAT * 1/100) which is not 100% dynamic - we should fix this
var grossPriceOfShoes = netPriceOfShoes * calculatedVAT;


//lets check our result using the alert function
alert(grossPriceOfShoes);






/*

var carBMW = 300000;
var carMerc = 250000;

var amount = 3;

var buyBMW = carBMW * amount;
var buyMerc = carMerc * amount;

var color1 = "red";
var color2 = "blue";
var color3 = "green";

var buy = buyBMW + buyMerc;



alert("you bought = " + (amount + amount) + " cars in the color = " + color1 + " and the totalt cost is = " + buy);

    */