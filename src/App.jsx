import { BrowserRouter, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import "../src/assets/scss/index.scss"

const App = () => {
  return (
    <BrowserRouter> 
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='bg-about-pattern'>
          <About />
        </div>
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Works /> */}
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
   </BrowserRouter>
  );
}

export default App;
