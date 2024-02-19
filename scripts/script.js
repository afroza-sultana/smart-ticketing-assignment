const allBtn = document.getElementsByClassName('btn');
let count = 0;
let seatLeft = 8;
for (const btn of allBtn){
    btn.addEventListener('click',function(e){
        count = count + 1;
        seatLeft = seatLeft - 1;
        setInnerText('seat-num', count);
        setInnerText('seat-left', seatLeft);
        const setBgColor = e.target.id;
        addBackgroundColor(setBgColor)
        const seatDetails= document.getElementById('selected-seat-details');
        const div = document.createElement('div');
        div.innerHTML = `
        <p>${setBgColor}</p>
        <p>Economoy</p>
        <span>550</span>
    `;
    div.classList.add('flex', 'justify-between');
    seatDetails.appendChild(div);
        const getPrice= count * 550;
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = getPrice;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = count * 550;
    })
}

function setInnerText (id, value){
    document.getElementById(id).innerText = value;
}
function addBackgroundColor(id){
    const element = document.getElementById(id);
    element.classList.add('bg-[#1DD100]','text-white')
}
