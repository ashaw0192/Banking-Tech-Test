const DateFormat = require(`./dateFormatModel`);

class TransactionModel {
  constructor() {
    this.balance = 0.0;
    this.transactionList = [];
    this.date = new DateFormat();
  }

  getBalance() {
    return this.round(this.balance);
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
    transactionObj["balance"] = this.getBalance();
    this.transactionList.push(transactionObj);
  }

  round(amount) {
    return parseFloat(amount.toFixed(2));
  }
}

module.exports = TransactionModel;
