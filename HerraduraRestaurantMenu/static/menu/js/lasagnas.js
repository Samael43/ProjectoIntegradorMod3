var lcart = document.querySelector('#lcart')
var ltotal = document.querySelector('#ltotal')

//agregar pizza

function addLasagna(lid) {
    lasagnaId = '#lasa' + lid;
    var name = document.querySelector(lasagnaId). innerHTML;
    var radio = 'lasa_' + lid;
    var pri = document.getElementsByName(radio);
    var size, price;
    if(pri[0].checked) {
        price = pri[0].value;
        size = 'S';
    }
    else if(pri[1].checked) {
        price = pri[1].value;
        size = 'M'
    }

    else {
        price = pri[2].value;
        size = 'L'
    }

    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var CartSize = orders.length;

    orders[CartSize] = [name, size, price];
    localStorage.setItem('orders', JSON.stringify(orders));

    total = Number(total) + Number(price);
    localStorage.setItem('total', total);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    buttonX = '<div class= "deleteb" onclick="deteleteLasagna(' + CartSize + ')">x</div>';
    ltotal.innerHTML = 'Total: ' + total + ' $';
    lcart.innerHTML += '<li>'+ name + ' ' + size + ': ' + price + ' $' + buttonX + '</li>';
}

function LshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var CartSize = orders.length;
    lcart.innerHTML

    for (let i = 0; i < CartSize; i++) {
        buttonX = '<div class= "deleteb" onclick="deteleteLasagna(' + i + ')">x</div>';
        lcart.innerHTML += '<li>'+ orders[i][0] + ' ' + orders[i][1] + ': ' + orders[i][2] + ' $' + buttonX + '</li>';
    }
    ltotal.innerHTML = 'Total: ' + total + ' $';
}

LshoppingCart();

PshoppingCart();

function deteleteLasagna(n) {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');

    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    
    LshoppingCart();

}