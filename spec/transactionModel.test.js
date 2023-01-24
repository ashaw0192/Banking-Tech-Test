const TransactionModel = require(`../models/transactionModel`);

describe("TransactionModel", () => {
  it("returns a balance of 0", () => {
    const model = new TransactionModel();

    expect(model.getBalance()).toEqual(0);
  });

  it("returns an empty transaction list", () => {
    const model = new TransactionModel();

    expect(model.getTransactions()).toEqual([]);
  });

  it("returns a balance of 100.00 when 100.00 is deposited", () => {
    const model = new TransactionModel();
    const mockDate = "23/01/2023";
    model.deposit(100.0, mockDate);

    expect(model.getBalance()).toEqual(100.0);
  });

  it("reflects in the transaction list when deposit made", () => {
    const model = new TransactionModel();
    const mockDate = "23/01/2023";
    model.deposit(100.0, mockDate);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate,
        debit: 100.0,
        balance: 100.0,
      },
    ]);
  });

  it("reflects in the transaction list when multiple deposits made", () => {
    const model = new TransactionModel();
    const mockDate1 = "22/01/2023";
    model.deposit(100.05, mockDate1);
    const mockDate2 = "23/01/2023";
    model.deposit(50.5, mockDate2);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate1,
        debit: 100.05,
        balance: 100.05,
      },
      {
        date: mockDate2,
        debit: 50.5,
        balance: 150.55,
      },
    ]);
  });

  it("returns a balance of -100.00 when 100.00 withdrawn", () => {
    const model = new TransactionModel();
    model.withdraw(100.0);

    expect(model.getBalance()).toEqual(-100.0);
  });

  it("reflects in transaction list when withdrawal made", () => {
    const model = new TransactionModel();
    const mockDate = "23/01/2023";
    model.withdraw(100.0, mockDate);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate,
        credit: 100.0,
        balance: -100.0,
      },
    ]);
  });

  it("reflects in the transaction list with multiple deposit/withdrawal", () => {
    const model = new TransactionModel();
    const mockDate1 = "01/01/2021";
    model.deposit(50.0, mockDate1);
    const mockDate2 = "02/02/2022";
    model.withdraw(45.0, mockDate2);
    const mockDate3 = "03/03/2023";
    model.deposit(40.0, mockDate3);
    const mockDate4 = "04/04/2024";
    model.withdraw(5.55, mockDate4);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate1,
        debit: 50.0,
        balance: 50.0,
      },
      {
        date: mockDate2,
        credit: 45.0,
        balance: 5.0,
      },
      {
        date: mockDate3,
        debit: 40.0,
        balance: 45.0,
      },
      {
        date: mockDate4,
        credit: 5.55,
        balance: 39.45,
      },
    ]);
  });

  it("rounds currency fractions in the list", () => {
    const model = new TransactionModel();
    const mockDate = "01/01/2021";
    model.deposit(50.005, mockDate);

    expect(model.getTransactions()).toEqual([
      {
        date: mockDate,
        debit: 50.01,
        balance: 50.01,
      },
    ]);
  });
});
