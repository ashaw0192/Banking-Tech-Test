const DateFormatModel = require(`../models/dateFormatModel`);

describe("DateFormatter", () => {
  it("returns a formatted date", () => {
    const dateFormatModel = new DateFormatModel();
    const mockDate = new Date("Wed Jan 25 2023");

    expect(dateFormatModel.formatDate(mockDate)).toEqual("25/01/2023");
  });
});
