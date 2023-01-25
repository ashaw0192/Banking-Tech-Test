class TransactionModel {
  constructor() {
    this.transactionList = [];
  }

  getTransactions() {
    return this.transactionList;
  }

  deposit(amount, date) {
    this.formatTransactionList("debit", amount, date);
  }

  withdraw(amount, date) {
    this.formatTransactionList("credit", amount, date);
  }

  formatTransactionList(transactionType, amount, date) {
    let transactionObj = {};
    transactionObj["date"] = date;
    transactionObj[transactionType] = this.#round(amount);
    this.transactionList.push(transactionObj);
  }

  #round(amount) {
    return parseFloat(amount.toFixed(2));
  }
}

module.exports = TransactionModel;
