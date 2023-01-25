class StatementModel {
  constructor() {
    this.balance = 0
    this.header = "date || debit || credit || balance";
  }

  debitFormat(transaction) {
    if (transaction.debit === undefined) {
      return ""
    } else {
      this.balance += transaction.debit
      return this.#poundsPence(transaction.debit)
    }
  }

  creditFormat(transaction) {
    if (transaction.credit === undefined) {
      return ""
    } else {
      this.balance -= transaction.credit
      return this.#poundsPence(transaction.credit)
    }
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
                this.#poundsPence(this.balance)}`
      );
    });
  }

  formatStatement(transactionList) {
    console.log(this.header);
    this.transactionChecker(transactionList);
  }

  #poundsPence(amount) {
    return (Math.round(amount * 100) / 100).toFixed(2);
  }
}

module.exports = StatementModel;
