function calcTip() {
    var subtotalElem = document.getElementById('subtotal').value;
    var tipElem = document.getElementById('tip').value;
    var totalElem = document.getElementById('total');
    if (!isNaN(subtotalElem)) {
        var subtotal = parseFloat(subtotalElem);
        if (subtotal <= 0) {
            alert("Please enter a value greater than 0");
            return;
        }
    } else {
        alert("Please enter a value greater than 0");
        return;
    }

    if (!isNaN(tipElem)) {
        var tip = (parseFloat(tipElem) / 100) * subtotal;
        if (tip < 0) {
            alert("Please enter a value greater than 0");
            return;
        }
    }
    else {
        alert("Please enter a value greater than 0");
        return;
    }

    var total = subtotal + tip;
    totalElem.innerHTML = '$' + total;
}

