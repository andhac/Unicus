import React from "react";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature"

const HomeLayout = ({ children }) => {
return(
    <div>
        <Navbar/>
        <div className="container mx-auto px-4 lg:px-20">{children}</div>
        <Feature/>
    </div>
)

}



export default HomeLayout