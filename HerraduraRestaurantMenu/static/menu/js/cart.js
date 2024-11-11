var nam = document.querySelector('#nam');
var size = document.querySelector('#size');
var price = document.querySelector('#price');
var bill = document.querySelector('#total');
var rm = document.querySelector('#rm');

function shoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var CartSize = orders.length;
    
    nam.innerHTML = '<h3>Name</h3>'
    size.innerHTML = '<h3>Size</h3>'
    price.innerHTML = '<h3>Price</h3>'
    rm.innerHTML = '<h3><br></h3>'

    for (let i = 0; i < CartSize; i++) {
        rm.innerHTML += '<h4><button class= "btn-danger" onclick="removeItem(' + i + ')">x</button></h4>';
        nam.innerHTML += '<h4>' + orders[i][0] + '</h4>'
        size.innerHTML += '<h4>' + orders[i][1] + '</h4>'
        price.innerHTML += '<h4>' + orders[i][2] + '</h4>'
    }
    bill.innerHTML = 'Total: ' + total + ' $';
}

shoppingCart();

function removeItem(n) {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');

    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;
   
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    
    shoppingCart();

}

var note = document.querySelector('#message');

/*function order() {
    var msg = document.querySelector('#message').value;
    var url = '/HerraduraRestaurantMenu/order/';
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'note': msg })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Order submitted:', data);  // Log success message
      })
      .catch(error => {
        console.error('Error submitting order:', error);  // Log error message
      });
    }*/