import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./cart";

function App() {
  return (
    <>
      


     <BrowserRouter>

    <Routes>
   
   <Route path="/" element={<Home/>}/>

    <Route path="/Cart" element={<Cart/>}/>


    </Routes>
     
     
     
     </BrowserRouter>


    </>
  );
}

export default App;
