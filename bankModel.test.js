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

  it("returns a balance of 100.00 when 100.00 is deposited", () => {
    const model = new BankModel();
    model.deposit(100.0);

    expect(model.getBalance()).toEqual(100.0);
  });

  it("reflects in the transaction list when deposit made", () => {
    const model = new BankModel();
    model.deposit(100.0);
    let date = new Date();

    expect(model.getTransactions()).toEqual([
      {
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        debit: 100.0,
        balance: 100.0,
      },
    ]);
  });

  it("reflects in the transaction list when multiple deposits made", () => {
    const model = new BankModel();
    model.deposit(100.05);
    model.deposit(50.50)
    let date = new Date();

    expect(model.getTransactions()).toEqual([
      {
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        debit: 100.05,
        balance: 100.05,
      },
      {
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        debit: 50.50,
        balance: 150.55,
      },
    ]);
  })

  it("returns a balance of -100.00 when 100.00 withdrawn", () => {
    const model = new BankModel();
    model.withdraw(100.00);

    expect(model.getBalance()).toEqual(-100.00);
  })
});
