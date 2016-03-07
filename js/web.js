var VAT = 25;
var calculatedVAT = (1 + VAT * (1/100));


function newSum() {

    VAT = document.form.sum1.value;
    document.getElementById("result2").innerHTML += product_names[1].price * (1 + VAT * (1/100));
   // alert(product_names[1].price * (1 + VAT * (1/100)));


};

var product_names = [
      {
          "img": "http://placehold.it/200x120",
          "type": "Sneakers", // new property for this object
          "price": 250
      },
      {
          "img": "http://placehold.it/200x120",
          "type": "Boots", // new property for this object
          "price": 350
      },
      {
          "img": "http://placehold.it/200x120",
          "type": "Heels", // new property for this object
          "price": 450
      },
      {
          "img": "http://placehold.it/200x120",
          "type": "Cowboyboots", // new property for this object
          "price": 550
      }
    ];


// Variable of VAT (that can also differ from each country) in this case it is a tax of 23% - we calculate the % later. We can now just change this so see the new prices


var loadProducts = function () {
    var htmlData = '';
    htmlData += '<ul = "ul_products">';

    product_names.forEach(function (product) {
        htmlData += '<li id="li_products">';
        htmlData += '<img src=' + product.img + '>';
        htmlData += '<div id="name">' + product.type + '</div>';
        htmlData += '<div id="price">' + product.price + '</div>';
        htmlData += '<div id="price3">' + product.price * calculatedVAT + "<br>" + '</div>';
        htmlData += '<div id="price4">' + "" + '</div>' ;
        htmlData += '<br><br><a href="">Buy Now!</a>';
        htmlData += '</li>';
    });


    htmlData += '</ul>';
    document.getElementById("listproduct").innerHTML = htmlData;




};

loadProducts();







