const TransactionModel = require(`./transactionModel`);
const StatementModel = require(`./statementModel`);
const DateFormat = require(`./dateFormatModel`)

class Account {
  constructor() {
    this.transactionModel = new TransactionModel();
    this.statementModel = new StatementModel();
    this.dateFormat = new DateFormat();
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
