import "./App.css"
import{Routes} from "react-router-dom";
import HomelayoutHoc from "./HOC/Home.hoc";
import HomePage from "./pages/HomePage";

function App() {
    return (
       <>
       <HomelayoutHoc  component={HomePage}  path="/" />
       </>
    )
  }

export default App