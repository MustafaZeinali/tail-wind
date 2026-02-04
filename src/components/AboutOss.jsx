import employee from "../assets/about.png";
import airport from "../assets/airport.webp";
import palne from "../assets/plane.avif";
const About = () => {
  return (
    <>
      <main>
        <div className="flex justify-center items-center px-4 bg-blue-100">
            
          <p className=" text-4xl font-serif p-2">
            Welcome to [Your Agency Name], your trusted travel partner for easy
            and stress-free trips. We specialize in helping travelers book the
            best flights and hotels at great prices, all in one place. Whether
            you're planning a relaxing vacation, a business trip, or a
            last-minute getaway, we’re here to make your journey smooth from
            start to finish. Our goal is to provide you with fast booking,
            secure payments, and reliable travel options that match your needs
            and budget.
          </p>
          <img className="w-[50%] " src={employee} alt="employees" />
        </div>
        <div className=" h-[70vh] bg-green-100 flex justify-center px-3 ">
            <img className="w-[50%] " src={palne} alt="" />
            <p className="flex items-center p-3 text-4xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, nulla nemo nam asperiores exercitationem rerum amet expedita nostrum accusamus numquam magni fugit dolor iste quae sed beatae id suscipit non Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam laborum repellat excepturi molestias! Fugiat, est? Repellat dolore, doloremque maiores provident commodi temporibus aspernatur repudiandae labore nobis repellendus, libero placeat?</p>
        </div>
        <div className=" flex">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla mollitia culpa aliquid odit ut asperiores iure harum atque, cumque ea aliquam, quo necessitatibus porro expedita. Numquam libero laudantium et!</p>
            <img className="w-[30%] h-[32vh]" src={airport} alt="" />

        </div>
      </main>
    </>
  );
};
export default About;
