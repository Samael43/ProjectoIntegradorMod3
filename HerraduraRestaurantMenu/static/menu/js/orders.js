var pcart = document.querySelector('#pcart')
var ptotal = document.querySelector('#ptotal')

//agregar pizza

function addPizza (pid) {
    pizzaId = '#pizza' + pid;
    var name = document.querySelector(pizzaId). innerHTML;
    var radio = 'pizza' + pid;
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
   
    buttonX = '<div class= "deleteb" onclick="deteletePizza(' + CartSize + ')">x</div>';
    ptotal.innerHTML = 'Total: ' + total + ' $';
    pcart.innerHTML += '<li>'+ name + ' ' + size + ': ' + price + ' $' + button + '</li>';
}

function PshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var CartSize = orders.length;
    pcart.innerHTML

    for (let i = 0; i < CartSize; i++) {
        buttonX = '<div class= "deleteb" onclick="deteletePizza(' + i + ')">x</div>';
        pcart.innerHTML += '<li>'+ orders[i][0] + ' ' + orders[i][1] + ': ' + orders[i][2] + ' $' + buttonX + '</li>';
    }
    ptotal.innerHTML = 'Total: ' + total + ' $';
}

PshoppingCart();

function deteletePizza(n) {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');

    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;
   
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    
    PshoppingCart();

}