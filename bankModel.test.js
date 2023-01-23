const BankModel = require(`./bankModel`);

describe("BankModel", () => {
  it("returns a balance of 0", () => {
    const model = new BankModel();

    expect(model.getBalance()).toEqual(0);
  });

  it("returns an empty transaction list", () => {
    const model = new BankModel();

    expect(model.getTransactions()).toEqual([]);
  });

  it("formats the date", () => {
    const model = new BankModel();
    let date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    expect(model.formatDate()).toEqual(`${day}/${month}/${year}`);
  })

  it("returns a balance of 100.00 when 100.00 is deposited", () => {
    const model = new BankModel();
    model.deposit(100.0);

    expect(model.getBalance()).toEqual(100.0);
  });

  it("reflects in the transaction list when deposit made", () => {
    const model = new BankModel();
    model.deposit(100.0);
    let date = model.formatDate();

    expect(model.getTransactions()).toEqual([
      {
        date: date,
        debit: 100.0,
        balance: 100.0,
      },
    ]);
  });

  it("reflects in the transaction list when multiple deposits made", () => {
    const model = new BankModel();
    model.deposit(100.05);
    model.deposit(50.5);
    let date = model.formatDate();

    expect(model.getTransactions()).toEqual([
      {
        date: date,
        debit: 100.05,
        balance: 100.05,
      },
      {
        date: date,
        debit: 50.5,
        balance: 150.55,
      },
    ]);
  });

  it("returns a balance of -100.00 when 100.00 withdrawn", () => {
    const model = new BankModel();
    model.withdraw(100.0);

    expect(model.getBalance()).toEqual(-100.0);
  });

  it("reflects in transaction list when withdrawal made", () => {
    const model = new BankModel();
    model.withdraw(100.0);
    let date = model.formatDate();

    expect(model.getTransactions()).toEqual([
      {
        date: date,
        credit: 100.0,
        balance: -100.0,
      },
    ]);
  });

  it("reflects in the transaction list with multiple deposit/withdrawal", () => {
    const model = new BankModel();
    model.deposit(50.0);
    model.withdraw(45.0);
    model.deposit(40.0);
    model.withdraw(5.55);
    let date = model.formatDate();

    expect(model.getTransactions()).toEqual([
      {
        date: date,
        debit: 50.0,
        balance: 50.0,
      },
      {
        date: date,
        credit: 45.0,
        balance: 5.0,
      },
      {
        date: date,
        debit: 40.0,
        balance: 45.0,
      },
      {
        date: date,
        credit: 5.55,
        balance: 39.45,
      },
    ]);
  });
});
