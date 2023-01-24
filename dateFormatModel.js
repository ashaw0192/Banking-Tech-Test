class DateFormat {
  constructor() {
    this.date = new Date();
  }

  formatDate() {
    const day = ("0" + this.date.getDate()).slice(-2);
    const month = ("0" + (this.date.getMonth() + 1)).slice(-2);
    const year = this.date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
}

module.exports = DateFormat;
