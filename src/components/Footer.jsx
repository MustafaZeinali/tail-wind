import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyan-300/50 border-t border-cyan-400/30">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <NavLink to="/" className="text-lg font-semibold text-cyan-900 hover:text-cyan-700">
              Sun Travel
            </NavLink>
            <p className="mt-2 text-sm text-cyan-800/80">
              Your trusted travel partner for easy and stress-free trips.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-900">
              Quick links
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-cyan-800/90 hover:text-cyan-700 hover:underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book"
                  className="text-sm text-cyan-800/90 hover:text-cyan-700 hover:underline"
                >
                  Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutOss"
                  className="text-sm text-cyan-800/90 hover:text-cyan-700 hover:underline"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className="text-sm text-cyan-800/90 hover:text-cyan-700 hover:underline"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-900">
              Contact
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-cyan-800/90">
              <li>contact@suntravel.example</li>
              <li>+46 70 123 45 67</li>
            </ul>
          </div>

          {/* Legal / extra */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-900">
              Legal
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-cyan-800/90">
              <li>
                <a href="#" className="hover:text-cyan-700 hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700 hover:underline">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-cyan-400/30 pt-6 text-center text-sm text-cyan-800/80">
          © {new Date().getFullYear()} Sun Travel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
