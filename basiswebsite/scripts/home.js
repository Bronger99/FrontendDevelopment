var vorigeButton = document.querySelector("main section:nth-of-type(1) button:nth-of-type(1)");
var volgendeButton = document.querySelector("main section:nth-of-type(1) button:nth-of-type(2)");
var newProductList = document.querySelector("main section:nth-of-type(1) ul");
var newProduct = document.querySelector("main section:nth-of-type(1) ul li");


vorigeButton.onclick = naarVorigeItem;
volgendeButton.onclick = naarVolgendeItem;

function naarVorigeItem() {
    newProductList.scrollLeft = newProductList.scrollLeft - newProduct.clientWidth;
}

function naarVolgendeItem() {
    newProductList.scrollLeft = newProductList.scrollLeft + newProduct.clientWidth;
}

