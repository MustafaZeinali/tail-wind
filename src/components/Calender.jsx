import { useContext, useState } from "react";
import { ContextTail } from "../ContextConfig";

const ReservCalender = () => {
  const { setOpen, setCollectedDays, setTotalDays } = useContext(ContextTail);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [theMonths] = useState([
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
  const weeksfull = Array.from({ length: day().length }, () => "");

  const handleDate = () => {
    return new Date(year, month + 1, 0).getDate();
  };
  const days = Array.from({ length: handleDate() }, (_, i) => i + 1);

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };
  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const allSelectedDays = (num) => {
    if (startDate === null) {
      setStartDate(new Date(year, month, num));
    } else if (endDate === null) {
      const newEnd = new Date(year, month, num);
      setEndDate(newEnd);
      const start = startDate.getDate();
      const end = num;
      const minDay = Math.min(start, end);
      const maxDay = Math.max(start, end);
      const numberOfDays = maxDay - minDay + 1;
      const allDays = Array.from({ length: numberOfDays }, (_, i) => {
        const dayNumber = minDay + i;
        return new Date(year, month, dayNumber);
      });

      const formattedDays = [
        allDays[0].toLocaleDateString(),
        allDays[allDays.length - 1].toLocaleDateString(),
      ];

      setSelectedDay(allDays);
      setCollectedDays(formattedDays);
      setTotalDays(allDays);
    } else {
      setStartDate(null);
      setEndDate(null);
      setSelectedDay([]);
      setCollectedDays([]);
      setTotalDays([]);
    }
  };

  const handleClickCalnder = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <main className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
        <section className="w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b bg-sky-50 px-4 py-3">
            <h2 className="text-lg font-semibold font-serif text-sky-900">
              Reservation calendar
            </h2>
            <button
              onClick={handleClickCalnder}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Close ✕
            </button>
          </div>

          {/* Body */}
          <div className="px-4 pb-4 pt-3 sm:px-6 sm:pb-6">
            {/* Month header + controls */}
            <div className="mb-3 flex items-center justify-between">
              <div className="font-mono text-sm sm:text-base">
                {theMonths[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={previousMonth}
                  className="rounded-md border px-2 py-1 text-xs sm:text-sm hover:bg-gray-50"
                >
                  Prev
                </button>
                <button
                  onClick={nextMonth}
                  className="rounded-md border px-2 py-1 text-xs sm:text-sm hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Weekdays + days */}
            <ul className="grid grid-cols-7 place-items-center gap-1 text-center text-[11px] sm:text-xs md:text-sm">
              {weeks.map((week) => (
                <li
                  className="py-1 text-xs font-semibold text-gray-600 flex justify-center"
                  key={week}
                >
                  {week}
                </li>
              ))}
              {weeksfull.map((_, index) => (
                <li key={`empty-${index}`} className="py-1" />
              ))}
              {days.map((dayNumber) => {
                const currentDay = new Date(year, month, dayNumber);
                const isInRange =
                  (startDate &&
                    currentDay.getTime() === startDate.getTime()) ||
                  (startDate &&
                    endDate &&
                    currentDay >= startDate &&
                    currentDay <= endDate);

                return (
                  <button
                    key={dayNumber}
                    onClick={() => allSelectedDays(dayNumber)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs sm:text-sm border hover:bg-sky-100 ${
                      isInRange ? "bg-sky-600 text-white border-sky-600" : ""
                    }`}
                  >
                    {dayNumber}
                  </button>
                );
              })}
            </ul>

            {/* Local selection summary */}
            <div className="mt-4 text-xs sm:text-sm text-gray-700">
              {selectedDay.length > 0 && startDate && endDate && (
                <p>
                  {selectedDay.length} days selected:{" "}
                  {startDate.toLocaleDateString()} –{" "}
                  {endDate.toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ReservCalender;
