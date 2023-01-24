const TransactionModel = require(`./transactionModel`);
const StatementModel = require(`./statementModel`);

class Account {
  constructor() {
    this.transactionModel = new TransactionModel();
    this.statementModel = new StatementModel();
  }

  deposit(amount) {
    this.transactionModel.deposit(amount);
  }

  withdraw(amount) {
    this.transactionModel.withdraw(amount);
  }

  statement() {
    this.statementModel.formatStatement(this.transactionModel.getTransactions());
  }
       
}

module.exports = Account;
