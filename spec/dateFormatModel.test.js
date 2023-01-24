const DateFormatModel = require(`../models/dateFormatModel`);

describe("DateFormatter", () => {
  it("returns a formatted date", () => {
    const dateFormatModel = new DateFormatModel();
    let date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    expect(dateFormatModel.formatDate()).toEqual(formattedDate);
  });
});
