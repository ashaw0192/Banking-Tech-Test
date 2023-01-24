const Account = require(`../account`);
const TransactionModel = require(`../models/transactionModel`);
const StatementModel = require(`../models/statementModel`);
const DateFormatModel = require(`../models/dateFormatModel`);

jest.mock(`../models/transactionModel`);
jest.mock(`../models/statementModel`);
jest.mock(`../models/dateFormatModel`);

describe("Account", () => {
  beforeEach(() => {
    TransactionModel.mockClear();
    StatementModel.mockClear();
    DateFormatModel.mockClear();
  });

  it("calls transaction model once when a deposit is made", () => {
    const account = new Account();
    account.deposit(100.0);

    expect(TransactionModel).toHaveBeenCalledTimes(1);
  });

  it("calls transaction model once when a withdrawal is made", () => {
    const account = new Account();
    account.withdraw(100.0);

    expect(TransactionModel).toHaveBeenCalledTimes(1);
  });

  it("calls date format model once when a transaction is made", () => {
    const account = new Account();
    account.deposit(100.0);

    expect(DateFormatModel).toHaveBeenCalledTimes(1);
  });

  it("calls transaction model once when a statement is requested", () => {
    const account = new Account();
    account.statement();

    expect(TransactionModel).toHaveBeenCalledTimes(1);
  });

  it("calls statement model once when a statement is requested", () => {
    const account = new Account();
    account.deposit(100.0);

    expect(StatementModel).toHaveBeenCalledTimes(1);
  });
});
