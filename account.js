const TransactionModel = require(`./transactionModel`);

class Account {
  constructor() {
    this.transaction = new TransactionModel();
  }

  deposit(amount) {
    this.transaction.deposit(amount);
  }

  withdraw(amount) {
    this.transaction.withdraw(amount);
  }

  poundsPence(amount) {
    return (Math.round(amount * 100) / 100).toFixed(2);
  }

  statement() {
    console.log("date || credit || debit || balance");
    this.transaction
      .getTransactions()
      .reverse()
      .forEach((transaction) =>
        console.log(
          `${transaction.date} || ${
            transaction.debit === undefined
              ? ""
              : this.poundsPence(transaction.debit)
          } || ${
            transaction.credit === undefined
              ? ""
              : this.poundsPence(transaction.credit)
          } || ${this.poundsPence(transaction.balance)}`
        )
      );
  }
}

module.exports = Account;
