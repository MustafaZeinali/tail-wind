import { motion, useAnimation , useInView} from "framer-motion";
import { useState ,useRef } from "react";
import products from "../data.js";
import ProductCard from "./ItemCard.jsx";
const StartPage = () => {
    const [searchField , setSearchField] = useState("")
    const [sortedItems , setSortedItems] = useState(products);
    const theRef = useRef(null);
    const inputSearch = (e) =>{
      console.log("from input search");
      setSearchField(e.target.value.toLowerCase())
      if(e.target.value.trim()=== ""){
        setSortedItems(products)
      }
    }
  const searchHandle = ()=>{
    console.log("it clicks");
    const filter = products.filter((item) =>(
      item.title.toLowerCase().includes(searchField)
    ))
    setSortedItems(filter)
    console.log("filter" , filter);
    
    return filter
  }
 
  return (
    <main className="bg-sky-500/10 flex-1">
      <motion.div
      variants={{
        hidden: {opacity:0, y:50},
        visible: {opacity:1 , y: 0},
      }}
      ref={theRef}
      initial= "hidden"
      whileInView="visible"
      viewport={{once:true , amount: 0.2}}
      transition={{duration:2 , ease: "easeOut"}}
      > 
      <div className="flex justify-center px-4 pt-6">
        <div className="flex w-full max-w-md items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
          <input
            onChange={inputSearch}
            value={searchField}
            type="text"
            placeholder="Search destinations..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none placeholder:text-gray-400"
          />
          <button
            onClick={searchHandle}
            type="button"
            className="rounded-full bg-cyan-600 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-white hover:bg-cyan-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {sortedItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            /*title={item.title ?? item.description}*/
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
      </motion.div>
    </main>
  );
};
export default StartPage;
