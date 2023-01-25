class TransactionModel {
  constructor() {
    this.transactionList = [];
  }

  getTransactions() {
    return this.transactionList;
  }

  formatTransactionList(transactionType, amount) {
    let transactionObj = {};
    transactionObj["date"] = new Date();
    transactionObj[transactionType] = amount;
    this.transactionList.push(transactionObj);
  }
}

module.exports = TransactionModel;
