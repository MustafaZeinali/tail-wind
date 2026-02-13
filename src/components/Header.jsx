import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const baseLink =
    "text-sm sm:text-base text-sky-950 hover:text-sky-700 hover:underline underline-offset-4";

  return (
    <header className="border-b border-cyan-400/40 bg-cyan-300/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / brand */}
        <NavLink
          to="/"
          className="text-lg sm:text-xl font-semibold tracking-wide text-sky-950"
        >
          Sun Travel
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          <NavLink to="/" className={baseLink}>
            Home
          </NavLink>
          <NavLink to="/book" className={baseLink}>
            Book
          </NavLink>
          <NavLink to="/Contact" className={baseLink}>
            Contact
          </NavLink>
          <NavLink to="/aboutOss" className={baseLink}>
            About us
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex flex-col items-center rounded-md p-2 text-sky-950 hover:bg-cyan-200 focus:outline-none sm:hidden"
          aria-label="Toggle navigation"
        >
          <span className="h-0.5 w-5 bg-sky-900 block mb-1" />
          <span className="h-0.5 w-5 bg-sky-900 block mb-1" />
          <span className="h-0.5 w-5 bg-sky-900 block" />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="sm:hidden border-t border-cyan-400/40 bg-cyan-300/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            <NavLink
              to="/"
              className={baseLink}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/book"
              className={baseLink}
              onClick={() => setOpen(false)}
            >
              Book
            </NavLink>
            <NavLink
              to="/Contact"
              className={baseLink}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/aboutOss"
              className={baseLink}
              onClick={() => setOpen(false)}
            >
              About us
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
