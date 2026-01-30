import { useParams } from "react-router-dom"
import products from "../data.js"
import { useContext, useEffect } from "react"
import { ContextTail } from "../ContextConfig.jsx"
const DetailsItem = ()=>{ 
    const {productData, setProductData}= useContext(ContextTail)
    const {id} = useParams()
    /*useEffect(()=>{
        async function getItem(){
            setProductData(products.find((p)=> p.id==id))
        }
        getItem()
    },[id])*/
    const theData = products.find((p)=> p.id== Number(id))
    console.log("find id product", theData);
    
    return(
        <>
        <main>
            <section className="flex flex-col items-center">
                <div className="aspect-2/1 overflow-hidden rounded-lg mt-3">
                    <img src={theData.images} alt={theData.title} className="h-full w-full object-cover" />
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