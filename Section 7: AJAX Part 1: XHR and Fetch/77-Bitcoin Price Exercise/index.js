var price = document.querySelector(".price");
var btn = document.querySelector("button")

function newPrice() {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText).bpi.USD.rate;
            console.log(data);
            price.innerText = `${data} USD`;
        };
    };
    XHR.open("Get", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
}

newPrice()

btn.addEventListener("click", newPrice);