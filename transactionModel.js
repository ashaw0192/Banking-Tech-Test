const DateFormat = require(`./dateFormatModel`)

class TransactionModel {
  constructor() {
    this.balance = 0.0;
    this.transactionList = [];
    this.date = new DateFormat();
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactionList;
  }

  deposit(amount) {
    this.balance += amount;
    this.formatTransactionList("debit", amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.formatTransactionList("credit", amount);
  }

  formatTransactionList(transactionType, amount) {
    let transactionObj = {};
    transactionObj["date"] = this.date.formatDate();
    transactionObj[transactionType] = amount;
    transactionObj["balance"] = this.balance;
    this.transactionList.push(transactionObj);
  }
}

module.exports = TransactionModel;
