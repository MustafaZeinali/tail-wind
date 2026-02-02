import { useContext } from "react"
import calender from "../assets/calender.jpg"
import { ContextTail } from "../ContextConfig"
const ReservCalender = () =>{
 const {open , setOpen} = useContext(ContextTail)

 const handleClickCalnder = () =>{
    setOpen(false)
 }
    return(
        <>
        <main className="flex  justify-center">
            <section className="min-h-24 bg-red-300 absolute bottom-50 ">
                <div className="flex justify-center py-3">
                    <p className="absolute left-1 cursor-pointer" onClick={handleClickCalnder}>Close</p>
                    <h2 className="text-xl font-semibold">Calender</h2>
                </div>
                <div >
                    <img src={calender} alt="calender" />
                </div>
            </section>
        </main>
        </>
    )
}
export default ReservCalender