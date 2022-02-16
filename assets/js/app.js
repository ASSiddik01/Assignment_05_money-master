// Get value
function getValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputVlaue = parseFloat(inputField.value);
    return inputVlaue;
}
// Total Expense Calculate
function costCalculate() {
    // 1. Get Total Income
    const income = getValue('income');
    // 2. Get Food
    const food = getValue('food')
    // 3. Get Rent
    const rent = getValue('rent')
    // 3. Get Cloths
    const cloth = getValue('cloth')
    console.log(cloth);
}