const startOfDay = (date) => {
  const newDate = new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
};

const add = (input) => {
  return input < 10 ? "0" + input : input;
};

const dateToInputFormat = ({ date }) => {
  if (!date) {
    return null;
  }
  const month = add(date?.getMonth() + 1);
  const day = add(date?.getDate());
  const hours = add(date?.getHours);
  const minutes = add(date?.getMinutes);

  return `${date?.getFullYear()}.${month}.${day} ${hours}:${minutes}`;
};

const monthAndYear = (date) => {
  if (!date) {
    return null;
  }
  const month = add(date?.getMonth() + 1);

  return `${date?.getFullYear()}.${month}`;
};

const WEEK_DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEK_DAYS_FULL = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const MONTHS_FULL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
export {
  dateToInputFormat,
  WEEK_DAYS_SHORT,
  WEEK_DAYS_FULL,
  MONTHS_FULL,
  MONTHS_SHORT,
  monthAndYear,
  startOfDay
};
