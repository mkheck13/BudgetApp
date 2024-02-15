const totalBudgetEl = document.getElementById('totalBudget');
const yourMoneyEl = document.getElementById('yourMoney');
const updateBudgetBtn = document.getElementById('updateBudget');
const inputBox = document.querySelector('.val-box');

let totalBudget = 0;

updateBudgetBtn.addEventListener('click', function () {

    const inputVal = parseFloat(inputBox.value);


    totalBudget = inputVal;
    totalBudgetEl.textContent = `Total Budget: $${totalBudget}`;


    yourMoneyEl.textContent = `Available: $${inputVal}`;


    inputBox.value = '';
});



const addExpenseBtn = document.getElementById("addExpense");

addExpenseBtn.addEventListener("click", function () {
    const newDescription = document.getElementById("newDescription").value;
    const newValue = document.getElementById("newValue").value;

    const expenseBox = document.createElement("div");
    expenseBox.classList.add("d-flex", "expense-box", "col-12");

    const expenseDescription = document.createElement("p");
    expenseDescription.id = "expenseDescription";
    expenseDescription.textContent = newDescription;

    const expenseCost = document.createElement("p");
    expenseCost.id = "expenseCost";
    expenseCost.textContent = "$" + newValue;

    const deleteBox = document.createElement("a");
    deleteBox.id = "deleteBox";
    deleteBox.textContent = "❌";

    

    
    expenseBox.appendChild(expenseDescription);
    expenseBox.appendChild(expenseCost);
    expenseBox.appendChild(deleteBox);
    
    

    const container = document.querySelector(".container");
    container.appendChild(expenseBox);

    document.getElementById("newDescription").value = "";
    document.getElementById("newValue").value = "";


    const yourMoneyEl = document.getElementById('yourMoney');
    let yourMoney = parseFloat(yourMoneyEl.textContent.split('$')[1]);
    yourMoney -= newValue;
    yourMoneyEl.textContent = `Available: $${yourMoney.toFixed(2)}`;

    const deleteButtons = document.querySelectorAll("#deleteBox");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.parentElement.remove();
        });
    });
});



const deleteButtons = document.querySelectorAll("#deleteBox");

deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentElement.remove();
    });
});