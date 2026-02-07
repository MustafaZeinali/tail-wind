import ocean from "../assets/beachDrone.mp4"
import dryPalm from "../assets/dryPalm.jpeg";
import penthouse from "../assets/laPentHouse.jpg";
import tokyoJapan from "../assets/tokyoJapan.jpg";
import pris from "../assets/pris.png";
import { Link } from "react-router-dom";
const Home = () =>{
 //Link is gonna fix 
    return(
        <>
        <main>
            <div className="relative w-full h-[80vh]">
                <video className="absolute inset-0 h-full w-full object-cover" src={ocean} autoPlay loop muted />
                <div className="absolute inset-0 flex justify-center items-center bg-black/10 hover:bg-black/1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center px-4 py-4 md:p-6 drop-shadow-lg">
                        Welcome to Sun Travel
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 h-[80vh] bg-orange-200" >
                <div className="flex flex-col justify-center overflow-hidden ">
                    <div className=" overflow-hidden">
                        <Link to="/product/1221">
                        <img className="w-full" src={dryPalm} alt="Palm" />

                        </Link>
                    </div>
                    <p className=" font-semibold text-base sm:text-lg md:text-xl shrink-0">20% for first booking</p>
                </div>
                <div className="flex flex-col justify-center overflow-hidden ">
                    <div className=" overflow-hidden">
                       <Link to="/product/1515"> 
                       <img className="w-full  object-cover" src={penthouse} alt="Penthouse" />
                       </Link> 
                    </div>
                    <p className=" font-semibold text-base sm:text-lg md:text-xl shrink-0">Penthouse under price</p>
                </div>
                <div className="flex flex-col justify-center overflow-hidden ">
                    <div className=" overflow-hidden">
                        <Link to="/product/19991">
                        <img className="w-full  object-cover" src={tokyoJapan} alt="Tokyo" />
                        </Link>
                    </div>
                    <p className=" font-semibold text-base sm:text-lg md:text-xl shrink-0">Two weeks half price</p>
                </div>
            </div>
            <div className="h-[80vh] bg-black/70 flex ">
                <div className="bg-red-300 flex items-center">
                    <p className="text-6xl text-white font-serif p-2"> we have got awards </p>
                </div>
                <div className="overflow-hidden">
                    <img src={pris} alt="pris" />
                </div>

            </div>
        </main>
        </>
    )
}

export default Home