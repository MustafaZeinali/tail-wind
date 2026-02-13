import { useParams } from "react-router-dom"
import products from "../data.js"
import { useContext, useState } from "react"
import ReservCalender from "./Calender.jsx"
import { ContextTail } from "../ContextConfig.jsx"
const DetailsItem = ()=>{ 
    const {open , setOpen , collectedDays ,totalDays ,setCollectedDays, } = useContext(ContextTail); 
    const [currentIndex , setCurrentIndex]= useState(0)
    const {id} = useParams()
    const theData = products.find((p) => p.id=== Number(id))
    if(!theData)return null;
    console.log("find id product", theData);

    const hasGallery = Array.isArray(theData.images) && theData.images.length > 0
    const displayImages = hasGallery ? theData.images[currentIndex % theData.images.length] : theData.image

    const nextClick = () => {
        if (hasGallery) setCurrentIndex((prev) => (prev + 1) % theData.images.length)
    }
    const previousClick = () => {
        if (hasGallery) setCurrentIndex((prev) => (prev - 1 + theData.images.length) % theData.images.length)
    }

    const handleReservModal = ()=>{
        console.log("it clicks");
        setOpen(true)

    }
    const handleClick = () =>{
        setCollectedDays()
    }
    
    return(
        <>
        <main className="w-full max-w-4xl mx-auto px-4" >
            <section className="flex flex-col items-center">
                <div className="w-full max-w-2xl min-h-[240px] sm:min-h-[320px] md:min-h-[400px] aspect-[4/3] overflow-hidden rounded-xl mt-3 bg-gray-100 flex items-center justify-center">
                    <img className="w-full h-full object-contain" src={displayImages} alt={theData.title} />
                </div>
                {hasGallery && (
                <div className="mt-3 flex gap-2">
                    <button className="border border-solid px-3 py-1.5 rounded hover:text-white hover:bg-black transition-colors duration-200 ease-in-out" onClick={previousClick}>Previous</button>
                    <button className="border border-solid px-3 py-1.5 rounded hover:text-white hover:bg-black transition-colors duration-200 ease-in-out" onClick={nextClick}>Next</button>
                </div>
                )}
                <div className="mt-4 w-full max-w-2xl">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl p-4 md:p-5">{theData.details}</p>
                    <p className="text-sm sm:text-base md:text-lg">{theData.price} {theData.currency}</p>
                </div>
                <button onClick={handleReservModal} className="border px-4 py-1 rounded-sm
                mt-5 hover:bg-black hover:text-white "> Book </button>
                <div>
                      { open ?  <div>

                <ReservCalender/>
                </div> : false}
                </div>
              
                {totalDays.length > 0 && collectedDays.length >= 2 && (
                  <div className="mt-6 w-full max-w-2xl rounded-lg bg-white/80 px-4 py-3 shadow-sm text-sm sm:text-base text-sky-900">
                    <p className="font-semibold text-sky-800">
                      {totalDays.length} days selected
                    </p>
                    <p className="mt-1">
                      It begins:{" "}
                      <span className="font-medium">{collectedDays[0]}</span>{" "}
                      to{" "}
                      <span className="font-medium">{collectedDays[1]}</span>
                    </p>
                  </div>
                )}
            </section>
        </main>
        </>
    )
}
export default DetailsItem