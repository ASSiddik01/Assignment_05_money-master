// Get value
function getValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;

};

// Update Balance
function updateBalance(fieldName, fieldValue) {
    const previousExpense = document.getElementById(fieldName);
    previousExpense.innerText = fieldValue;
}


// Total Expense Calculate
function costCalculate() {

    // 1. Get Total Income
    const income = getValue('income');

    // 2. Get Food
    const food = getValue('food');

    // 3. Get Rent
    const rent = getValue('rent');

    // 4. Get Cloths
    const cloth = getValue('cloth');

    // 7. Update Total Expanse
    const totalExpense = food + rent + cloth;
    updateBalance('total_expenses', totalExpense);

    // 7. Update Total Balance
    const totalBalance = income - totalExpense;
    updateBalance('balance', totalBalance);
};

// Save Calculation
function saveCalculate() {

    // 8. Get save
    const save = getValue('save');

    // 9. Calculate save amount
    const income = getValue('income');
    const saveAmount = income * save / 100;

    // 10. Update Save amount
    updateBalance('save_amount', saveAmount);

    // 11. Calculate remaining balance
    const balance = parseFloat(document.getElementById('balance').innerText);
    const remainBalance = balance - saveAmount;

    // 12. Update remaining balance
    updateBalance('remain_balance', remainBalance);
};