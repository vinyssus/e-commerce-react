import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./Componets/Contact/Contact";
import Home from "./Componets/Home/Home";
import Fouter from "./Componets/Layout/Fouter/Fouter";
import Navbar from "./Componets/Layout/Navbar/Navbar";
import Login from "./Componets/Login/Login";
import Registration from "./Componets/Registration/Registration";


function App() {
  return (
    <>
    
       <Navbar />

       {/* <Contact /> */}
       <Contact />
       <Fouter />
    
    </>
  );
}

export default App;
