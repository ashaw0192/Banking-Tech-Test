const TransactionModel = require(`../models/transactionModel`);

describe("TransactionModel", () => {
  it("returns an empty transaction list", () => {
    const model = new TransactionModel();

    expect(model.getTransactions()).toEqual([]);
  });

  it("reflects in the transaction list when deposit made", () => {
    const model = new TransactionModel();
    const mockDate = new Date();
    model.formatTransactionList("debit", 100.0);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate,
        debit: 100.0,
      },
    ]);
  });

  it("reflects in the transaction list when multiple deposits made", () => {
    const model = new TransactionModel();
    const mockDate1 = new Date();
    model.formatTransactionList("debit", 100.05);
    const mockDate2 = new Date();
    model.formatTransactionList("debit", 50.5);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate1,
        debit: 100.05,
      },
      {
        date: mockDate2,
        debit: 50.5,
      },
    ]);
  });

  it("reflects in transaction list when withdrawal made", () => {
    const model = new TransactionModel();
    const mockDate = new Date();
    model.formatTransactionList("credit", 100.0);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate,
        credit: 100.0,
      },
    ]);
  });

  it("reflects in the transaction list with multiple deposit/withdrawal", () => {
    const model = new TransactionModel();
    const mockDate1 = new Date();
    model.formatTransactionList("debit", 50.0);
    const mockDate2 = new Date();
    model.formatTransactionList("credit", 45.0);
    const mockDate3 = new Date();
    model.formatTransactionList("debit", 40.0);
    const mockDate4 = new Date();
    model.formatTransactionList("credit", 5.55);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate1,
        debit: 50.0,
      },
      {
        date: mockDate2,
        credit: 45.0,
      },
      {
        date: mockDate3,
        debit: 40.0,
      },
      {
        date: mockDate4,
        credit: 5.55,
      },
    ]);
  });
});
