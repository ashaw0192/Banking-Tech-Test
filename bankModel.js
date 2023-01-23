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
    this.formatTransactionList("debit", amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.formatTransactionList("credit", amount);
  }

  formatTransactionList(transactionType, amount) {
    let transactionObj = {};
    transactionObj["date"] = this.formatDate();
    transactionObj[transactionType] = amount;
    transactionObj["balance"] = this.balance;
    this.transactionList.push(transactionObj);
  }

  formatDate() {
    let date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

module.exports = BankModel;
