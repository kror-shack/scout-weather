const getDayFromDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay(); // returns number from 1

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(week[dayOfWeek]);
  return week[dayOfWeek];
};

export default getDayFromDate;
