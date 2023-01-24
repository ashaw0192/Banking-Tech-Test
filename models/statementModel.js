class StatementModel {
  poundsPence(amount) {
    return (Math.round(amount * 100) / 100).toFixed(2);
  }

  formatStatement(transactionList) {
    console.log("date || debit || credit || balance");
    transactionList.length === 0
      ? console.log("  ||  ||  || balance: 0.00")
      : transactionList
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

module.exports = StatementModel;
