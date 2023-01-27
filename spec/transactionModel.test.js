const TransactionModel = require(`../models/transactionModel`);
const date = "Wed Jan 25 2023"

describe("TransactionModel", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(date));
  })

  it("returns an empty transaction list", () => {
    const model = new TransactionModel();

    expect(model.getTransactions()).toEqual([]);
  });

  it("reflects in the transaction list when deposit made", () => {
    const model = new TransactionModel();
    model.formatTransactionList("debit", 100.0);

    expect(model.getTransactions()).toEqual([
      {
        date: new Date(),
        debit: 100.0,
      },
    ]);
  });

  it("reflects in the transaction list when multiple deposits made", () => {
    const model = new TransactionModel();
    model.formatTransactionList("debit", 100.05);
    model.formatTransactionList("debit", 50.5);

    expect(model.getTransactions()).toEqual([
      {
        date: new Date(),
        debit: 100.05,
      },
      {
        date: new Date(),
        debit: 50.5,
      },
    ]);
  });

  it("reflects in transaction list when withdrawal made", () => {
    const model = new TransactionModel();
    model.formatTransactionList("credit", 100.0);

    expect(model.getTransactions()).toEqual([
      {
        date: new Date(),
        credit: 100.0,
      },
    ]);
  });

  it("reflects in the transaction list with multiple deposit/withdrawal", () => {
    const model = new TransactionModel();
    model.formatTransactionList("debit", 50.0);
    model.formatTransactionList("credit", 45.0);
    model.formatTransactionList("debit", 40.0);
    model.formatTransactionList("credit", 5.55);

    expect(model.getTransactions()).toEqual([
      {
        date: new Date(),
        debit: 50.0,
      },
      {
        date: new Date(),
        credit: 45.0,
      },
      {
        date: new Date(),
        debit: 40.0,
      },
      {
        date: new Date(),
        credit: 5.55,
      },
    ]);
  });
});
