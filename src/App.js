import React, {useState, useEffect} from 'react';
import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {

const  [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  },2500)
},[])

  return (
    <div>
      {
        loading ?
        <div className='bg-black flex justify-center items-center w-full h-screen mx-auto'>
          <PropagateLoader
          color="#FFB300"
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        </div>

        :

        <div>
          <NavBar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
