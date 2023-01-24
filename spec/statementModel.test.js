const StatementModel = require(`../models/statementModel`);

describe("StatementModel", () => {
  let logSpy = jest.spyOn(console, "log");
  afterEach(() => {
    logSpy.mockRestore();
  });
  it("returns amounts to 2.d.p", () => {
    const model = new StatementModel();
    const decimal = model.poundsPence(10).split(".")[1];

    expect(decimal.length).toEqual(2);
  });

  it("formats the statement header", () => {
    const model = new StatementModel();
    let logSpy = jest.spyOn(console, "log");
    const mockTransactions = [];
    model.formatStatement(mockTransactions);

    expect(logSpy).toHaveBeenCalledWith("date || debit || credit || balance");
  });

  it("only returns balance 0.00 if not transactions made", () => {
    const model = new StatementModel();
    let logSpy = jest.spyOn(console, "log");
    const mockTransactions = [];
    model.formatStatement(mockTransactions);

    expect(logSpy).toHaveBeenCalledWith("  ||  ||  || balance: 0.00");
  });

  it("formats the statement body for deposit", () => {
    const model = new StatementModel();
    let logSpy = jest.spyOn(console, "log");
    const mockTransactions = [{ date: "23/01/23", debit: 10.0, balance: 10.0 }];
    model.formatStatement(mockTransactions);

    expect(logSpy).toHaveBeenCalledWith("23/01/23 || 10.00 ||  || 10.00");
  });

  it("formats the statement body for withdrawal", () => {
    const model = new StatementModel();
    let logSpy = jest.spyOn(console, "log");
    const mockTransactions = [
      { date: "23/01/23", credit: 10.0, balance: 10.0 },
    ];
    model.formatStatement(mockTransactions);

    expect(logSpy).toHaveBeenCalledWith("23/01/23 ||  || 10.00 || 10.00");
  });

  it("returns transactions in the correct order", () => {
    const model = new StatementModel();
    let logSpy = jest.spyOn(console, "log");
    const mockTransactions = [
      { date: "10/01/23", credit: 10.0, balance: -10.0 },
      { date: "23/01/23", debit: 10.0, balance: 0.0 },
    ];
    model.formatStatement(mockTransactions);
    console.log(logSpy.mock.calls[-1]);
    expect(logSpy.mock.calls).toContainEqual(
      ["date || debit || credit || balance"],
      ["23/01/23 || 10.00 ||  || 0.00"],
      ["10/01/23 ||  || 10.00 || -10.00"]
    );
  });
});
