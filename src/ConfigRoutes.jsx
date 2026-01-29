
import { createBrowserRouter } from "react-router-dom";
import Root from "./RootConfig";
import StartPage from "./components/StartPage.jsx";
import DetailsItem from "./components/DetailsItem.jsx";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children:[
            {
                path:"",
                element:<StartPage/>
            },
            {
                path:"/product/:id",
                element:<DetailsItem/>
            }
        ]
    }
])

export default router