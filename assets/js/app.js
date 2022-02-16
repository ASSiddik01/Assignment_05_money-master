// Get value
function getValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
};

// Get Inner Text
function getInnerText(textId) {
    const textField = document.getElementById(textId);
    const textValue = parseFloat(textField.innerText);
    return textValue
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
    const food = getValue('food')
    // 3. Get Rent
    const rent = getValue('rent')
    // 4. Get Cloths
    const cloth = getValue('cloth')

    // 5. Get Tolal Expense
    const expense = getInnerText('total_expenses');
    // 6. Get Balence
    const balance = getInnerText('balance');

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
    const saveAmount = income * 20 / 100;

    // 10. Update Save amount
    const previousSaveAmount = document.getElementById('save_amount')
    previousSaveAmount.innerText = saveAmount;

    // 11. Calculate remaining balance
    const balance = getInnerText('balance');
    const remainBalance = balance - saveAmount;

    // 12. Update remaining balance
    const previousRemainBlance = document.getElementById('remain_balance')
    previousRemainBlance.innerText = remainBalance;


};

