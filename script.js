
const shoppingCardBtn = document.getElementById('shoppingCardButton');
shoppingCardBtn.addEventListener('click', function(){
    const checkOut = document.getElementById('shoppingCard');
    checkOut.style.display ='none';
    const checkOutArea = document.getElementById('checkOutArea');
    checkOutArea.style.display = 'block';
})


//addPhone
const addPhoneBtn = document.getElementById('addPhone');
addPhoneBtn.addEventListener('click', function(){
    handlePhoneChange(true);
    calculateTotal();
    
})

// decreasePhone
const decreasePhoneBtn = document.getElementById('decreasePhone');
decreasePhoneBtn.addEventListener('click', function(){
    handlePhoneChange(false); 
    calculateTotal();
})


//addCase
const addCaseBtn = document.getElementById('addCase');
addCaseBtn.addEventListener('click', function(){
    handleCaseChange(true);
    calculateTotal();
})

// decreaseCase
const decreaseCaseBtn = document.getElementById('decreaseCase');
decreaseCaseBtn.addEventListener('click', function(){
    handleCaseChange(false);  
    calculateTotal();  
})

//  totalPrice
function calculateTotal() {
    const phoneInput = document.getElementById('phoneAmount');
    const phoneAmount = phoneInput.value;
    const caseInput = document.getElementById('caseAmount');
    const caseAmount = caseInput.value;

    const totalPrice = phoneAmount * 1278 + caseAmount * 59;
    document.getElementById('totalPrice').innerText = totalPrice;

    const tax = totalPrice * 0.05;
    document.getElementById('tax').innerText = Math.round(tax);
    
    document.getElementById('grandTotal').innerText = Math.round(totalPrice + tax);
}


// caseChangesFunction
function handleCaseChange(isAdd){
    const caseAmount = document.getElementById('caseAmount');
    const caseAmountNumber = parseInt(caseAmount.value);
    let caseAmountNew = caseAmountNumber;
    if (isAdd == true) {
        caseAmountNew = caseAmountNumber + 1;
    }
    if (isAdd == false && caseAmountNew > 0) {
        caseAmountNew = caseAmountNumber - 1;
    }
    caseAmount.value = caseAmountNew;
    document.getElementById('casePrice').innerText = caseAmountNew * 59;
}

// phoneChangesFunction
function handlePhoneChange(isAdd){
    const phoneAmount = document.getElementById('phoneAmount');
    const phoneAmountNumber = parseInt(phoneAmount.value);
    let phoneAmountNew = phoneAmountNumber;
    if (isAdd == true) {
        phoneAmountNew = phoneAmountNumber + 1;
    }
    if (isAdd == false && phoneAmountNew > 0) {
        phoneAmountNew = phoneAmountNumber - 1;
    }
    phoneAmount.value = phoneAmountNew;
    document.getElementById('phonePrice').innerText = phoneAmountNew * 1278;
}






    // addPhone
// const phoneAmount = document.getElementById('phoneAmount');
// const phoneAmountNumber = parseInt(phoneAmount.value);
// const phoneAmountNew = phoneAmountNumber + 1;
// phoneAmount.value = phoneAmountNew;
// document.getElementById('phonePrice').innerText = phoneAmountNew * 12;

    // decreasePhone
// const phoneAmount = document.getElementById('phoneAmount');
//     const phoneAmountNumber = parseInt(phoneAmount.value);
//     const phoneAmountNew = phoneAmountNumber - 1;
//     phoneAmount.value = phoneAmountNew;
//     document.getElementById('phonePrice').innerText = phoneAmountNew * 12;