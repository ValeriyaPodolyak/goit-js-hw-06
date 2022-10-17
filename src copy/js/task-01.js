const ulCatQuantity = document.querySelectorAll("li.item");
console.log("Numbers of categories:", ulCatQuantity.length);

ulCatQuantity.forEach(function (elem){
    console.log("Category:", elem.querySelector("h2"))
     console.log ("Elements:", elem.querySelectorAll("ul li").length)

});

