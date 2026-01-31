import { useParams } from "react-router-dom"
import products from "../data.js"
import { useContext, useEffect, useState } from "react"
import { ContextTail } from "../ContextConfig.jsx"
const DetailsItem = ()=>{ 
    const [currentIndex , setCurrentIndex]= useState(0)
    const {id} = useParams()
    const theData = products.find((p) => p.id=== Number(id))
    if(!theData)return null;
    console.log("find id product", theData);

    const nextClick = ()=>{
        console.log("nextClick work");
        setCurrentIndex(currentIndex +1)
        
    }
    const hasGallery = Array.isArray(theData.images) && theData.images.length > 0
    const displayImages = hasGallery ? theData.images[currentIndex % theData.images.length]: theData.image
    const previousClick=()=>{
        console.log("nextClick work");
        setCurrentIndex(currentIndex -1)
        
    }
    return(
        <>
        <main className="w-full max-w-4xl mx-auto px-4" >
            <section className="flex flex-col items-center">
                <div className="w-full max-w-2x1 aspect-[4/3]overflow-hidden rounded-lg mt-3 p-3">
                {/*theData.images.map((pic)=>( 
                    <img src={pic.currentIndex} alt={theData.title} className="h-full w-full object-cover" />
                ))*/}
                    <img className="w-full h-full object-contain" src={displayImages} alt={theData.title}/>
                </div>
                <div className="mt-3 flex  gap-2">
                <button className="border border-solid px-2 mr-2 ml-2 hover:text-white hover:bg-[#000] transition-colors duration-300 ease-in-out" onClick={previousClick} >Previous</button>
                    <button className="border border-solid px-4 ml-2 mr-2 hover:text-white hover:bg-[#000] transition-transformer duration-300 easi-in-out" onClick={nextClick}>Next</button>
                </div>
                
                <div className="mt-4">
                    <p className="text-2xl p-5" >{theData.details}</p>
                    <p>{theData.price}</p>
                </div>
                <button> Add to Cart </button>
            </section>
        </main>
        </>
    )
}
export default DetailsItem