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
    this.balance += amount;
    this.formatTransactionList('debit', amount)
  }

  withdraw(amount) {
    this.balance -= amount;
    this.formatTransactionList('credit', amount)
  }

  formatTransactionList(type, amount) {
    let date = new Date();
    let transactionObj ={}
    transactionObj["date"] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    transactionObj[type] = amount;
    transactionObj["balance"] = this.balance;
    this.transactionList.push(transactionObj);
  }
}

module.exports = BankModel;
