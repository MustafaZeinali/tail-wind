import ocean from "../assets/beachDrone.mp4"
import products from "../data.js";
const Home = () =>{

    return(
        <>
        <main>
            <div className=" w-full h-[70vh]   bg-red-200">
                <video className=" h-full w-full object-cover " src={ocean} autoPlay loop muted />
            </div>
            <div className="absolute bottom-19 w-full h-full flex justify-center items-center  " > 
                <h1 className="text-3xl text-white font-semibold border border-2 border-solid border-black-700 p-6
                {/* ">Welcome to Sun Travel</h1> 
            </div>
            <div className="bg-black-500">
                <div>
                    
                </div>
            </div>
        </main>
        </>
    )
}

export default Home