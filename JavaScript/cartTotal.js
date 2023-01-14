let amounts = document.querySelectorAll(".quantity-input");
for (let amount of amounts) {
    validateAmount(amount);
}

function validateAmount(amount) {
    const NUBMERS = "1234567890"
    for (let char of amount.value) {
        if (!NUBMERS.includes(char)) {
            amount.value = 1;
            break;
        }
    }
}

function parseAmount(amount) {
    validateAmount(amount);
    if (amount.value === "") return 1;
    return parseInt(amount.value);
}

function plus(id) {
    let amount = document.getElementById("amount" + id.toString());
    validateAmount(amount);

    amount.value = parseAmount(amount) + 1;
    updateTotal(id);
}

function minus(id) {
    let amount = document.getElementById("amount" + id.toString());
    validateAmount(amount);

    amount.value = parseAmount(amount) - 1;
    if (parseInt(amount.value) <= 0) amount.value = 1;
    updateTotal(id);
}

function updateTotal(id) {
    let amount = document.getElementById("amount" + id.toString());
    validateAmount(amount);
    let total = document.getElementById("total" + id.toString());
    let priceObject = document.getElementById("price" + id.toString());

    let price = parseInt(priceObject.innerText.slice(1));
    total.innerText = "€" + (price * parseAmount(amount));
    updateGrandTotal();
}

function updateGrandTotal() {
    let totals = document.querySelectorAll(".item-total");
    let sum = 0;
    for (let total of totals) {
        sum += parseInt(total.innerText.slice(1));
    }

    let grandTotal = document.querySelector(".cart-total");
    grandTotal.innerText = "Total price: €" + sum;
}