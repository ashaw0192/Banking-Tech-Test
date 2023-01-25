class TransactionModel {
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

  deposit(amount, date) {
    this.balance += amount;
    this.formatTransactionList("debit", amount, date);
  }

  withdraw(amount, date) {
    this.balance -= amount;
    this.formatTransactionList("credit", amount, date);
  }

  formatTransactionList(transactionType, amount, date) {
    let transactionObj = {};
    transactionObj["date"] = date;
    transactionObj[transactionType] = this.#round(amount);
    transactionObj["balance"] = this.#round(this.getBalance());
    this.transactionList.push(transactionObj);
  }

  #round(amount) {
    return parseFloat(amount.toFixed(2));
  }
}

module.exports = TransactionModel;
