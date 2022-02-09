export function getTimeWindow() {
  const today = new Date();
  var dateFormatter = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const date = today.toLocaleDateString("en-US", dateFormatter);

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
    }
  };

  today.setDate(today.getDate() + daysToMonday(date));
  const beginningOfTheWeek = today.toLocaleDateString("en-US", dateFormatter);
  today.setDate(today.getDate() + 6);
  const endOfTheWeek = today.toLocaleDateString("en-US", dateFormatter);

  return [beginningOfTheWeek, endOfTheWeek];
}
