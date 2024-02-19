const allBtn = document.getElementsByClassName('btn');
let count = 0;
let seatLeft = 8;
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        const setBgColor = e.target.id;
        addBackgroundColor(setBgColor);
        count = count + 1;
        seatLeft = seatLeft - 1;
        setInnerText('seat-num', count);
        setInnerText('seat-left', seatLeft);
        
        const seatDetails = document.getElementById('selected-seat-details');
        const div = document.createElement('div');
        div.innerHTML = `
        <p>${setBgColor}</p>
        <p>Economoy</p>
        <span>550</span>
    `;
        div.classList.add('flex', 'justify-between');
        seatDetails.appendChild(div);
        const getPrice = count * 550;
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = getPrice;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = count * 550;
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
function addBackgroundColor(id) {
    const element = document.getElementById(id);
    element.classList.add('bg-[#1DD100]', 'text-white')
}



const numberInput = document.getElementById('number-input');
const inputValue = parseInt(numberInput.value);

// handle grand total price 
document.getElementById('apply-btn').addEventListener('click', function (e) {
    const input = document.getElementById('cupon-input');
    const grandTotal = document.getElementById('grand-total');
    const inputValue = input.value;
    if (inputValue === "NEW15") {
        const discountPrice = parseInt(grandTotal.innerText) * .15;
        const discount = document.getElementById('discount');
        const div = document.createElement('div');
        div.innerHTML = `
        <p>discount</p>
        <p>${discountPrice}</p>   
    `;
        div.classList.add('flex', 'justify-between', 'text-lg', 'mt-4');
        discount.appendChild(div);
        const price = parseInt(grandTotal.innerText) - discountPrice;
        grandTotal.innerText = price;
    } else if (inputValue === 'Couple 20') {
        const discountPrice = parseInt(grandTotal.innerText) * .20;
        const discount = document.getElementById('discount');
        const div = document.createElement('div');
        div.innerHTML = `
        <p>discount</p>
        <p>${discountPrice}</p>   
    `;
        div.classList.add('flex', 'justify-between', 'text-lg', 'mt-4');
        discount.appendChild(div);
        const price = parseInt(grandTotal.innerText) - discountPrice;
        grandTotal.innerText = price;
    }
    input.classList.add('hidden');
    e.target.classList.add('hidden');
})





