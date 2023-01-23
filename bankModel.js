class BankModel {
  constructor() {
    this.balance = 0.0;
    this.transactionList = [];
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactionList;
  }

  deposit(amount) {
    let date = new Date();
    this.balance += amount;
    this.transactionList.push({
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      debit: amount,
      balance: this.balance,
    });
  }
}

module.exports = BankModel;
