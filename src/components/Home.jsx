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
        <main className="bg-sky-50">
            {/* Hero — keep as is, only refine text container */}
            <div className="relative w-full h-[80vh]">
                <video className="absolute inset-0 h-full w-full object-cover" src={ocean} autoPlay loop muted />
                <div className="absolute inset-0 flex justify-center items-center bg-black/20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center px-4 py-4 md:p-6 drop-shadow-lg max-w-3xl">
                        Welcome to Sun Travel
                    </h1>
                </div>
            </div>

            {/* Promo cards — image size unchanged, only text/layout polish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 h-[80vh] bg-orange-200">
                <div className="flex flex-col justify-center overflow-hidden">
                    <div className="overflow-hidden">
                        <Link to="/product/1221">
                            <img className="w-full" src={dryPalm} alt="Palm" />
                        </Link>
                    </div>
                    <p className="font-semibold text-base sm:text-lg md:text-xl shrink-0 pt-2 px-1 text-sky-900/90">
                        20% for first booking
                    </p>
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                    <div className="overflow-hidden">
                        <Link to="/product/1515">
                            <img className="w-full object-cover" src={penthouse} alt="Penthouse" />
                        </Link>
                    </div>
                    <p className="font-semibold text-base sm:text-lg md:text-xl shrink-0 pt-2 px-1 text-sky-900/90">
                        Penthouse under price
                    </p>
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                    <div className="overflow-hidden">
                        <Link to="/product/19991">
                            <img className="w-full object-cover" src={tokyoJapan} alt="Tokyo" />
                        </Link>
                    </div>
                    <p className="font-semibold text-base sm:text-lg md:text-xl shrink-0 pt-2 px-1 text-sky-900/90">
                        Two weeks half price
                    </p>
                </div>
            </div>

            {/* Awards — responsive layout and typography only */}
            <section className="bg-sky-900/90 text-white">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 md:flex-row md:justify-between md:gap-8 md:py-16">
                    <div className="flex flex-1 items-center justify-center text-center md:justify-start md:text-left">
                        <p className="text-2xl font-serif leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                            We have got awards
                        </p>
                    </div>
                    <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg">
                        <img src={pris} alt="Awards" className="max-h-[280px] w-auto object-contain sm:max-h-[320px] md:max-h-[360px]" />
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Home