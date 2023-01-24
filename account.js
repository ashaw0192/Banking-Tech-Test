const TransactionModel = require(`./models/transactionModel`);
const StatementModel = require(`./models/statementModel`);
const DateFormatModel = require(`./models/dateFormatModel`);

class Account {
  constructor() {
    this.transactionModel = new TransactionModel();
    this.statementModel = new StatementModel();
    this.dateFormatModel = new DateFormatModel();
  }

  deposit(amount) {
    this.transactionModel.deposit(amount, this.dateFormatModel.formatDate());
  }

  withdraw(amount) {
    this.transactionModel.withdraw(amount, this.dateFormatModel.formatDate());
  }

  statement() {
    this.statementModel.formatStatement(
      this.transactionModel.getTransactions()
    );
  }
}

module.exports = Account;
