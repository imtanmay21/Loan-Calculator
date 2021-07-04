// Error card
const error = document.querySelector('.overlay');
const loader = document.querySelector('.loader');

// Event Listener
document.querySelector('.form-btn').addEventListener('click', function(){

    // Show loader
    loader.classList.remove('not-active');

    // Calculate result
    setTimeout(calculateRes, 2000);
});
document.querySelector('#error-card a i').addEventListener('click', closeError);

// Calculate Result function
function calculateRes(e) {
    console.log('Calculating...');

    // UI vars
    const loanAmt = document.getElementById('loan-amount');
    const loanInt = document.getElementById('loan-interest');
    const yearsToPay = document.getElementById('years');
    const monthlyPay = document.getElementById('month-pay');
    const totalPay = document.getElementById('total-pay');
    const totalInterest = document.getElementById('total-interest');


    const principal = parseFloat(loanAmt.value);
    const calcInterest = parseFloat(loanInt.value) / 100 / 12;
    const calcPayments = parseFloat(yearsToPay.value) * 12;

    // Compute monhtly payment
    const x = Math.pow(1 + calcInterest, calcPayments);
    const monthly = (principal * x * calcInterest) / (x - 1);

    if(isFinite(monthly)) {
        monthlyPay.value = monthly.toFixed(2);
        totalPay.value = (monthly * calcPayments).toFixed(2);
        totalInterest.value = ((monthly * calcPayments) - principal).toFixed(2) 
        
        // Hide loader
        loader.classList.add('not-active');
    } else {
        console.log('Error');
        error.classList.remove('not-active');
        loader.classList.add('not-active');
    }

}

// Close Errors
function closeError() {
    error.classList.add('not-active');
}
