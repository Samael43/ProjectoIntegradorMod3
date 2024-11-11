var hours = 24;
var now = new Date().getTime();
var StepTime = localStorage.getItem('stepTime')

if (StepTime == null) {
    localStorage.setItem('stepTime', now);
}
else {
    if (now - StepTime > hours*60*60*1000)
        localStorage.clear();
        localStorage.setItem('stepTime', now)
}

var orders = JSON.parse(localStorage.getItem('orders'));
var total = localStorage.getItem('total');

if (orders === null || orders === undefined) {
    localStorage.setItem('orders', JSON.stringify([]));
    orders = JSON.parse(localStorage.getItem('orders'));
}

if (total === null || total === undefined) {
    localStorage.setItem('total', 0);
    total = localStorage.getItem('total');
}

var cart = document.querySelector("#cart");
cart.innerHTML = orders.length;