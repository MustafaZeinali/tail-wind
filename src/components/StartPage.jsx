/*import Palm from "./assets/dryPalm.jpeg";
import palma from "./assets/palma.webp";
import beach from "./assets/nedladdning.jpg";
import pentHouse from "./assets/laPentHouse.jpg";
import sunset from "./assets/laSunset.jpg";
import street from "./assets/laStreet.webp";
import tokyo from "./assets/tokyo.jpg";
import oldTokyo from "./assets/tokyoOld.jpg";
import tokyoStreet from "./assets/tokyoStreet.jpg";*/
import products from "../data.js";
import ProductCard from "./ItemCard.jsx";
/*const StartPage = () => {
  return (
    <main className="bg-sky-500/10 flex-1">
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
          <div className="aspect-square overflow-hidden rounded-t-lg">
            <img className="h-full w-full object-cover" src={Palm} alt="Palm" />
          </div>
          <div className="p-3">
            <p className="text-sm font-medium">this is your dream beach</p>
            <button className="mt-2 rounded-md bg-cyan-600 px-3 py-1.5 text-sm text-white hover:bg-cyan-700">
              More Details
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
          <div className="aspect-square overflow-hidden rounded-t-lg ">
            <img
              className="h-full w-full object-cover"
              src={palma}
              alt="palma"
            />
          </div>
          <div className="p-3">
            <p className="text-sm font-medium">Don't miss it</p>
            <button className="mt-2 rounded-md bg-cyan-600 px-3 py-1.5 text-sm text-white hover:bg-cyan-700">
              More Details
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
          <div className="aspect-square overflow-hidden rounded-t-lg ">
            <img
              className="h-full w-full object-cover"
              src={beach}
              alt="beach"
            />
          </div>
          <div className="p-3">
            <p className="text-sm font-medium">this is it a phenomenoal</p>
            <button className="mt-2 rounded-md bg-cyan-600 px-3 py-1.5 text-sm text-white hover:bg-cyan-700">
              More Details
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="aspect-square overflow-hidden rounded-lg bg-white/50">
          <img
            className="h-full w-full object-cover"
            src={pentHouse}
            alt="pentHouse"
          />
        </div>
        <div className="p-3">
            <p className="text-sm font-medium">your vacation place is here</p>
            <button className="mt-2 rounded-lg bg-cyan-600 px-3 py-1.5 text-sm text-white hover:bg-cyan-700"> More Details </button>
        </div>
        </div>
        <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
             <div className="aspect-square overflow-hidden rounded-t-lg ">
          <img
            className="h-full w-full object-cover"
            src={sunset}
            alt="sunset"
          />
        </div>
        <div className="p-3">
            <p className="text-sm font-medium">A city with all potentioal</p>
            <button className="mt-2 rounded-lg bg-cyan-600 px-3 py-1.5 text-white hover:bg-cyan-700"> More Details </button>
        </div>
        </div>
       <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
             <div className="aspect-square overflow-hidden rounded-lg bg-white/50">
          <img
            className="h-full w-full object-cover"
            src={street}
            alt="LA street"
          />
        </div>
        <div className="p-3">
            <p className="text-sm font-medium"> Warm and joyful in city</p>
            <button className="mt-2 rounded-lg bg-cyan-600 px-3 py-1.5 text-white hover:bg-cyan-700"> More Details</button>
        </div>
       </div>
       <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 hover:scale-105">
             <div className="aspect-square overflow-hidden rounded-lg bg-white/50">
          <img className="h-full w-full object-cover" src={tokyo} alt="tokyo" />
        </div>
        <div className="p-3">
            <p className="text-sm font-medium">A city with mountain</p>
            <button className=" mt-2 rounded-lg bg-cyan-600 px-3 py-1.5 text-white hover:bg-cyan-700 "> More Details </button>
        </div>
       </div>
       <div className="rounded-lg bg-white/50 shadow-sm transition-tranform duration-200 ease-in-out hover:scale-105">
            <div className="aspect-square overflow-hidden rounded-lg bg-white/50">
          <img
            className="h-full w-full object-cover"
            src={oldTokyo}
            alt="old tokyo"
          />
        </div>
        <div className="p-3">
            <p className="text-sm font-medium">Welcome to the city of samurai</p>
            <button className="mt-2 rounded-lg bg-cyan-600 px-3 py-1.5 text-white hover:bg-cyan-700"> More Details </button>
        </div>
       </div>
        <div className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
        <div className="aspect-square overflow-hidden rounded-lg bg-white/50">
          <img
            className="h-full w-full object-cover"
            src={tokyoStreet}
            alt="tokyo street"
          />
        </div>
        <div className="p-3">
            <p className="text-sm font-medium">you are in future</p>
            <button className="mt-2 rounded-lg bg-cyan-600 px-3 py-1.5 text-white hover:bg-cyan-700"> More Details </button>
        </div>
        </div>
        
      </section>
    </main>
   
  );
};*/
const StartPage = () => {
  return (
    <main className="bg-sky-500/10 flex-1">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((item) => (
          <ProductCard className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105"
            key={item.id}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </main>
  );
};
export default StartPage;
