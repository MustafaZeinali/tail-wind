import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
const Root = ()=>(
    <div className="flex flex-col min-h-screen">
        <Header/>
        <div>
        <Outlet/>
        </div>
        <Footer/>
    </div>
)

export default Root