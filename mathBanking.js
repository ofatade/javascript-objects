// Task 1: Constructor function for the Account object
function Account(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.owner = owner;
}

// Task 2: Method to deposit funds
Account.prototype.deposit = function(amount) {
    if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return;
    }
    this.balance += amount;
    console.log(`Successfully deposited $${amount}. Your new balance is $${this.balance}.`);
};

Account.prototype.withdraw = function(amount) {
    if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
    }
    if (amount > this.balance) {
        console.log("Insufficient balance for the withdrawal.");
        return;
    }
    this.balance -= amount;
    console.log(`Successfully withdrew $${amount}. Your new balance is $${this.balance}.`);
};

// Task 3: Method to calculate compound interest
Account.prototype.calculateInterest = function(rate, time) {
    if (rate <= 0 || time <= 0) {
        console.log("Interest rate and time must be positive.");
        return;
    }
    const interest = this.balance * Math.pow((1 + rate / 100), time) - this.balance;
    console.log(`The interest on your balance of $${this.balance} at a rate of ${rate}% for ${time} periods is $${interest.toFixed(2)}.`);
    return interest;
};

// Testing the banking application

// Creating new accounts
const account1 = new Account(1, "Dare");
const account2 = new Account(2, "Joy");

// Displaying initial balances
console.log(`Initial balance of ${account1.owner}: $${account1.balance}`);
console.log(`Initial balance of ${account2.owner}: $${account2.balance}`);

// Depositing funds
account1.deposit(500);
account2.deposit(1000);

// Withdrawing funds
account1.withdraw(200);
account2.withdraw(1200); // This should display an insufficient balance message

// Calculating compound interest
account1.calculateInterest(5, 1); // Interest for 1 period at 5%
account2.calculateInterest(3, 2); // Interest for 2 periods at 3%

// Displaying final balances
console.log(`Final balance of ${account1.owner}: $${account1.balance}`);
console.log(`Final balance of ${account2.owner}: $${account2.balance}`);
