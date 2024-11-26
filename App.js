
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Footer from "./src/components/Footer.js";
import About from "./src/components/About.js";
import Contacts from "./src/components/Contacts.js";
import { createBrowserRouter,RouterProvider} from "react-router-dom";


const AppLayout=()=>{
    return (
        <div className="background">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />
    },
    {
        path:"/about", 
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contacts/>
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);