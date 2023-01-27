const StatementModel = require(`../models/statementModel`);
const DateFormatModel = require(`../models/dateFormatModel`);
const date = "Wed Jan 25 2023";
jest.mock(`../models/dateFormatModel`);

describe("StatementModel", () => {
  let logSpy = jest.spyOn(console, "log");

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(date));
  })

  afterEach(() => {
    logSpy.mockRestore();
    DateFormatModel.mockClear();
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
    const mockTransactions = [{ date: new Date(), debit: 10.0 }];
    model.formatStatement(mockTransactions);

    expect(logSpy).toHaveBeenCalledWith(`undefined || 10.00 ||  || 10.00`);
  });

  it("formats the statement body for withdrawal", () => {
    const model = new StatementModel();
    let logSpy = jest.spyOn(console, "log");
    const mockTransactions = [
      { date: new Date(), credit: 10.0 },
    ];
    model.formatStatement(mockTransactions);

    expect(logSpy).toHaveBeenCalledWith(`undefined ||  || 10.00 || -10.00`);
  });

  it("returns transactions in the correct order", () => {
    const model = new StatementModel();
    let logSpy = jest.spyOn(console, "log");
    const mockTransactions = [
      { date: new Date(), credit: 10.0 },
      { date: new Date(), debit: 15.0 },
    ];
    model.formatStatement(mockTransactions);
    expect(logSpy.mock.lastCall).toEqual(
      [`undefined ||  || 10.00 || 5.00`]
    );
  });
});
