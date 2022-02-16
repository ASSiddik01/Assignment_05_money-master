// Get value
function getValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputVlaue = parseFloat(inputField.value);
    return inputVlaue;
};

// Get Inner Text
function getInnerText(textId) {
    const textField = document.getElementById(textId);
    const textValue = parseFloat(textField.innerText);
    return textValue
};


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
    // 5. Get Balence
    const balance = getInnerText('balance');
    console.log(balance)
    
};

