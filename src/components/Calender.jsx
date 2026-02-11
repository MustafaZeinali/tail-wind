import { useContext, useState } from "react";
import calender from "../assets/calender.jpg";
import { ContextTail } from "../ContextConfig";
const ReservCalender = () => {
  const { open, setOpen } = useContext(ContextTail);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay , setSelectedDay] = useState([])
  const [ startDate , setStartDate] = useState(null);
  const [endDate , setEndDate] = useState(null);
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
  const allSelectedDays = (num) =>{
    if (startDate === null){
      setStartDate(new Date(year , month, num))
    }else if (endDate === null){
      setEndDate(new Date(year , month , num))
      const start = startDate.getDate()
      const end = num
      const minDay = Math.min(start, end)
      const maxDay = Math.max(start, end)
      const numberOfDays = maxDay - minDay + 1;
      const allDays = Array.from({length: numberOfDays} , (_ , i) => {
        const dayNumber = minDay + i
        return new Date(year , month, dayNumber)
      })
      setSelectedDay(allDays)
    }else{
      setStartDate(null)
      setEndDate(null)
      setSelectedDay([])
    }
    return
  }

  // const daysAreSelected = (dayNumber) =>{
  //   const checkedDays = selectedDay.find(item => item === dayNumber)
  //   if(checkedDays){
  //     setSelectedDay((previousSelectedDay)=> previousSelectedDay.filter(item => item !== dayNumber))
  //   }else{
  //     setSelectedDay([...selectedDay, dayNumber])
  //   }
  // }
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
            <h2 className="text-xl font-semibold font-serif">Calender</h2>
          </div>
          <div>
            <div className="flex justify-center font-mono">
              {theMonths[currentMonth.getMonth()]}
              {currentMonth.getFullYear()}
            </div>
            <div className="flex justify-between">
            <button onClick={nextMonth} className="p-1 border">
              Next Month
            </button>
            <button className="border p-1" onClick={previousMonth}>
              Previous Month
            </button>

            </div>
            <ul className="grid grid-cols-7">
              {weeks.map((week) => (
                <li className="border flex justify-center" key={week}>
                  {week}
                </li>
              ))}
              {weeksfull.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {days.map((day) =>{
                const currentDay = new Date(year,month,day)
                return(  <button onClick={()=>allSelectedDays(day)} className={`border flex justify-center ${ ( startDate && currentDay.getTime() === startDate.getTime()) || ( startDate && endDate && currentDay >= startDate && currentDay <= endDate  )? "bg-blue-500" : ""}`} key={day}>
                  {day}
                </button> )
               
})}
            </ul>
            <div>{selectedDay.length > 0 && (
  <p>
    {selectedDay.length} days: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
  </p>
)}</div>
          </div>
        </section>
      </main>
    </>
  );
};
export default ReservCalender;
