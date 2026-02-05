import { createBrowserRouter } from "react-router-dom";
import Root from "./RootConfig";
import StartPage from "./components/StartPage.jsx";
import DetailsItem from "./components/DetailsItem.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/AboutUs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path : "", element: <Home /> },
      {
        path: "/book",
        element: <StartPage />,
      },
      {
        path: "/product/:id",
        element: <DetailsItem />,
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path:"/aboutOss",
        element: <About/>
      }
    ],
  },
]);

export default router;
