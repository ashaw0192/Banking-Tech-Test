class BankModel {
  constructor() {
    this.balance = 0
    this.transactionList = []
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactionList;
  }
}

module.exports = BankModel;