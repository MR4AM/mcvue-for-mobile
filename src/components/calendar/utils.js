import moment from "moment";

export default {
  getMonthBetween(start, end) {
    let result = [];
    let startD = new Date(
      moment(start)
        .format("YYYY-MM-DD")
        .replace(/-/g, "/")
    );
    let endD = new Date(
      moment(end)
        .format("YYYY-MM-DD")
        .replace(/-/g, "/")
    );
    while (endD > startD) {
      startD.setDate(1);
      result.push(startD.toLocaleDateString());
      startD.setMonth(startD.getMonth() + 1);
    }
    return result;
  }
};
