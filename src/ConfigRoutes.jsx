import { createBrowserRouter } from "react-router-dom";
import Root from "./RootConfig";
import StartPage from "./components/StartPage.jsx";
import DetailsItem from "./components/DetailsItem.jsx";
import Home from "./components/Home.jsx";
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
    ],
  },
]);

export default router;
