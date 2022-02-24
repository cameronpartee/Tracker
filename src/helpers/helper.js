const today = new Date();
const dateFormatter = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

export function getWeeklyChartTimeWindow() {
  const tempDay = new Date(today);
  const date = tempDay.toLocaleDateString("en-US", dateFormatter);

  const daysToMonday = (date) => {
    const day = date.split(" ");
    switch (day[0]) {
      case "Monday,":
        return 0;
      case "Tuesday,":
        return -1;
      case "Wednesday,":
        return -2;
      case "Thursday,":
        return -3;
      case "Friday,":
        return -4;
      case "Saturday,":
        return -5;
      case "Sunday,":
        return -6;
      default:
        return 0;
    }
  };

  tempDay.setDate(tempDay.getDate() + daysToMonday(date));
  const beginningOfTheWeek = tempDay.toLocaleDateString("en-US", dateFormatter);
  tempDay.setDate(tempDay.getDate() + 6);
  const endOfTheWeek = tempDay.toLocaleDateString("en-US", dateFormatter);

  return `Progression Tracker: ${beginningOfTheWeek} - ${endOfTheWeek}`;
}

export function getIdNumber() {
  var tempDay = new Date(today);
  var oneJan = new Date(tempDay.getFullYear(), 0, 1);
  var numberOfDays = Math.floor((tempDay - oneJan) / (24 * 60 * 60 * 1000));
  var result = Math.ceil((tempDay.getDay() + 1 + numberOfDays) / 7);
  // lets check this tomorrow - yesterday it  was 8 today it is 9...
  return `${result - 1}${tempDay.getFullYear()}`;
}

export function getAnnualChartTimeWindow() {
  const tempDay = new Date(today);
  // We want to capture this on download/first login
  const startDate = "Monday, January 31";
  // endDate is wrong as well
  // enddate should be the last sunday interval that was added to
  // the annual numbers
  const endDate = tempDay.toLocaleDateString("en-US", dateFormatter);

  return `${startDate} - ${endDate}`;
}
