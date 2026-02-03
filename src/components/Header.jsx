import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <main className="flex justify-between flex-wrap items-center border border-solid border-red-500/75 py-3 bg-cyan-300/50 h-20">
        <section>
          <NavLink to="/">LOGO</NavLink>
        </section>
        <nav className="flex  px-4 gap-4 items-center">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/book">
            Book
          </NavLink>
          <NavLink to={"/contact"} >Contac Oss</NavLink>
        </nav>
      </main>
    </>
  );
};
export default Header;
