import employee from "../assets/about.png";
import airport from "../assets/airport.webp";
import palne from "../assets/plane.avif";
import { motion , useAnimate} from "framer-motion";
const About = () => {
  return (
    <>
      <main className="bg-sky-50">
        {/* Intro section */}
        <motion.div
        variants={{
          hidden: {opacity: 0, x:50 },
          visible: {opacity: 1 , x : 0}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut"}}
        >

        
        <section className="bg-blue-100 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row">
            <p className="text-lg leading-relaxed sm:text-xl md:text-2xl font-serif">
              Welcome to <span className="font-semibold">Sun Travel</span>, your trusted travel partner for easy
              and stress-free trips. We specialize in helping travelers book the
              best flights and hotels at great prices, all in one place. Whether
              you're planning a relaxing vacation, a business trip, or a
              last-minute getaway, we’re here to make your journey smooth from
              start to finish. Our goal is to provide you with fast booking,
              secure payments, and reliable travel options that match your needs
              and budget.
            </p>
            <img
              className="w-full max-w-md md:w-1/2 object-contain"
              src={employee}
              alt="Travel agency employees"
            />
          </div>
        </section>

        {/* Plane section */}
        <section className="bg-green-100 py-10">
          <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-6 px-4 md:flex-row">
            <img
              className="w-full max-w-lg md:w-1/2 rounded-lg object-cover"
              src={palne}
              alt="Plane ready for departure"
            />
            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nulla
              nemo nam asperiores exercitationem rerum amet expedita nostrum
              accusamus numquam magni fugit dolor iste quae sed beatae id
              suscipit non. Quas quibusdam laborum repellat excepturi molestias!
              Fugiat, est? Repellat dolore, doloremque maiores provident commodi
              temporibus aspernatur repudiandae labore nobis repellendus, libero
              placeat?
            </p>
          </div>
        </section>

        {/* Airport section */}
        <section className="bg-white py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row">
            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nulla mollitia culpa aliquid odit ut asperiores iure harum atque,
              cumque ea aliquam, quo necessitatibus porro expedita. Numquam
              libero laudantium et! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores accusantium repellendus doloremque
              consequuntur, in sapiente!
            </p>
            <img
              className="w-full max-w-sm md:w-1/3 rounded-lg object-cover"
              src={airport}
              alt="Airport terminal"
            />
          </div>
        </section>
        </motion.div>
      </main>
    </>
  );
};
export default About;
