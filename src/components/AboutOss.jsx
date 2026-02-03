import employee from "../assets/about.png";
const About = () => {
  return (
    <>
      <main>
        <div>
            <img src={employee} alt="employees" />
          <p>
            Welcome to [Your Agency Name], your trusted travel partner for easy
            and stress-free trips. We specialize in helping travelers book the
            best flights and hotels at great prices, all in one place. Whether
            you're planning a relaxing vacation, a business trip, or a
            last-minute getaway, we’re here to make your journey smooth from
            start to finish. Our goal is to provide you with fast booking,
            secure payments, and reliable travel options that match your needs
            and budget.
          </p>
        </div>
      </main>
    </>
  );
};
export default About;
