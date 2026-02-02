import ocean from "../assets/beachDrone.mp4"
import dryPalm from "../assets/dryPalm.jpeg";
import penthouse from "../assets/laPentHouse.jpg";
import tokyosamurai from "../assets/tokyoOld.jpg";
const Home = () =>{

    return(
        <>
        <main className="bg-black/11">
            <div className="relative w-full h-[70vh]">
                <video className="absolute inset-0 h-full w-full object-cover" src={ocean} autoPlay loop muted />
                <div className="absolute inset-0 flex justify-center items-center bg-black/10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center px-4 py-4 md:p-6 drop-shadow-lg">
                        Welcome to Sun Travel
                    </h1>
                </div>
            </div>
          <div>
            <p>
                we have Off for two weeks
            </p>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 py-5 px-4">
                <div className="flex flex-col rounded-lg overflow-hidden bg-red-200">
                    <div className="aspect-square overflow-hidden">
                        <img className="w-full h-full object-cover" src={dryPalm} alt="Palm" />
                    </div>
                    <p className="p-3 font-semibold text-base sm:text-lg md:text-xl shrink-0">20% for first booking</p>
                </div>
                <div className="flex flex-col rounded-lg overflow-hidden bg-red-200">
                    <div className="aspect-square overflow-hidden">
                        <img className="w-full h-full object-cover" src={penthouse} alt="Penthouse" />
                    </div>
                    <p className="p-3 font-semibold text-base sm:text-lg md:text-xl shrink-0">Penthouse under price</p>
                </div>
                <div className="flex flex-col rounded-lg overflow-hidden bg-red-200">
                    <div className="aspect-square overflow-hidden">
                        <img className="w-full h-full object-cover" src={tokyosamurai} alt="Tokyo" />
                    </div>
                    <p className="p-3 font-semibold text-base sm:text-lg md:text-xl shrink-0">Two weeks half price</p>
                </div>
            </div>
        </main>
        </>
    )
}

export default Home