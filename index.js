let countValue=document.querySelector('#counter');



let increment = () => {
    // get the value from the UI
    let value = parseInt(countValue.innerText);
    // increment the value
    value = value + 1;
    // set the value to the UI
    countValue.innerText = value;
}


let decrement = () => {
    // get the value from the UI
    let value = parseInt(countValue.innerText);
    // decrement the value
    value = value - 1;
    // set the value to the UI
    countValue.innerText = value;
}

let resetCounter = () => {
    countValue.innerText = 0;
}



// ========================================================================================


// ANOTHER WAY OF THE WRITINGB THE CODE 
// const countDisplay = document.querySelector('#counter');
// const incrementBtn = document.querySelector('#incrementBtn');
// const decrementBtn = document.querySelector('#decrementBtn');

// // Listen for a 'click' on the increment button
// incrementBtn.addEventListener('click', () => {
//     let currentValue = parseInt(countDisplay.innerText);
//     countDisplay.innerText = currentValue + 1;
// });

// // Listen for a 'click' on the decrement button
// decrementBtn.addEventListener('click', () => {
//     let currentValue = parseInt(countDisplay.innerText);
//     countDisplay.innerText = currentValue - 1;
// });




// =============================================================================================
