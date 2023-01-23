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
});