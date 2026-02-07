import { useContext, useState } from "react"
import calender from "../assets/calender.jpg"
import { ContextTail } from "../ContextConfig"
const ReservCalender = () =>{
 const {open , setOpen} = useContext(ContextTail)
 const [currentMonth,setCurrentMonth] = useState(new Date())
 const [theMonths , setTheMonths] = useState(["january","february","march","april","may","june","july","august","september","october","november","december"])
 const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


 const handleDate = ()=>{
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    new Date(year , month + 1 ,0).getDate()
    return
 }
 console.log("get months", currentMonth);
 
 const handleClickCalnder = () =>{
    setOpen(false)
 }
    return(
        <>
        <main className="flex  justify-center">
            <section className="min-h-24 w-[30%] bg-red-300 absolute bottom-50 ">
                <div className="flex justify-center py-3">
                    <p className="absolute left-1 cursor-pointer" onClick={handleClickCalnder}>Close</p>
                    <h2 className="text-xl font-semibold">Calender</h2>
                </div>
                <div >
                    <ul className="">
                        {theMonths.map((item) =>(
                        <li key={item}>{item}</li>
                        
                    ))} 
                    </ul>
                </div>
            </section>
        </main>
        </>
    )
}
export default ReservCalender