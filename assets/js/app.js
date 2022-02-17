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

// Calculate button Handle
function costCalculate() {
    // 1. Get Value
    const income = getValue('income');
    const food = getValue('food');
    const rent = getValue('rent');
    const cloth = getValue('cloth');

    // Error handle
    const items = [income, food, rent, cloth];
    for (const item of items) {
        if (isNaN(item)) {
            document.getElementById('string').style.display = 'block';
            document.getElementById('number').style.display = 'none';
        } else if (item < 0) {
            document.getElementById('string').style.display = 'none';
            document.getElementById('number').style.display = 'block';
        }


        // 2. Update Total Expanse
        const totalExpense = food + rent + cloth;
        
        // Error handle
        if (typeof totalExpense == 'number' && food > 0 && rent > 0 && cloth > 0 && income > 0) {
            updateBalance('total_expenses', totalExpense);

            // 3. Update Total Balance
            const totalBalance = income - totalExpense;
            updateBalance('balance', totalBalance);
        }
        //     updateBalance('total_expenses', totalExpense);

        // // 3. Update Total Balance
        // const totalBalance = income - totalExpense;
        // updateBalance('balance', totalBalance);



    }
};

// Save button Handle
function saveCalculate() {
    // 4. Get Values
    const save = getValue('save');

    // 5. Calculate & Update save amount
    const income = getValue('income');
    const saveAmount = income * save / 100;
    updateBalance('save_amount', saveAmount);

    // 6. Calculate & Update remaining balance
    const balance = parseFloat(document.getElementById('balance').innerText);

    // Error handle
    if (saveAmount > balance) {
        document.getElementById('saving').style.display = 'block';
        document.getElementById('string').style.display = 'none';
        document.getElementById('number').style.display = 'none';

    } else if (saveAmount < balance) {
        const remainBalance = balance - saveAmount;
        updateBalance('remain_balance', remainBalance);
    }

    // const remainBalance = balance - saveAmount;
    // updateBalance('remain_balance', remainBalance);
};