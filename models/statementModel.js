class StatementModel {
  constructor() {
    this.header = "date || debit || credit || balance";
  }

  poundsPence(amount) {
    return (Math.round(amount * 100) / 100).toFixed(2);
  }

  debitFormat(transaction) {
    return transaction.debit === undefined
      ? ""
      : this.poundsPence(transaction.debit);
  }

  creditFormat(transaction) {
    return transaction.credit === undefined
      ? ""
      : this.poundsPence(transaction.credit);
  }

  transactionChecker(transactionList) {
    if (transactionList.length === 0) {
      console.log("  ||  ||  || balance: 0.00");
    } else {
      this.transactionPrinter(transactionList);
    }
  }

  transactionPrinter(transactionList) {
    transactionList.reverse().forEach((transaction) => {
      console.log(`${transaction.date} || ${
            this.debitFormat(transaction)} || ${
              this.creditFormat(transaction)} || ${
                this.poundsPence(transaction.balance)}`
      );
    });
  }

  formatStatement(transactionList) {
    console.log(this.header);
    this.transactionChecker(transactionList);
  }
}

module.exports = StatementModel;
