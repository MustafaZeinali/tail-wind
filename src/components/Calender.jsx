import { useContext, useState } from "react";
import calender from "../assets/calender.jpg";
import { ContextTail } from "../ContextConfig";
const ReservCalender = () => {
  const { open, setOpen } = useContext(ContextTail);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [theMonths, setTheMonths] = useState([
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ]);
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const day = () => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return Array(firstDayOfMonth).fill("");
  };
  const weeksfull = Array.from({ length: day() }, (_) => "");
  const handleDate = () => {
    return new Date(year, month + 1, 0).getDate();
  };
  console.log("get months", currentMonth);
  const days = Array.from({ length: handleDate() }, (_, i) => i + 1);
  console.log("days", days);

  const nextMonth = () => {
    return setCurrentMonth(new Date(year, month + 1, 1));
  };
  const previousMonth = () => {
    return setCurrentMonth(new Date(year, month, -1));
  };
  const handleClickCalnder = () => {
    setOpen(false);
  };
  return (
    <>
      <main className="flex  justify-center">
        <section className="min-h-24 w-[50%] bg-green-100 absolute bottom-50 ">
          <div className="flex justify-center py-3">
            <p
              className="absolute left-1 cursor-pointer"
              onClick={handleClickCalnder}
            >
              Close
            </p>
            <h2 className="text-xl font-semibold">Calender</h2>
          </div>
          <div>
            <div>
              {theMonths[currentMonth.getMonth()]}
              {currentMonth.getFullYear()}
            </div>
            <button onClick={nextMonth} className="m-1 border">
              Next Month
            </button>
            <button className="border" onClick={previousMonth}>
              Previous Month
            </button>
            <ul className="grid grid-cols-7">
              {weeks.map((week) => (
                <li className="border flex justify-center" key={week}>
                  {week}
                </li>
              ))}
              {weeksfull.map((item) => (
                <li key={index}>{item}</li>
              ))}
              {days.map((day) => (
                <li className="border flex justify-center" key={day}>
                  {day}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
export default ReservCalender;
