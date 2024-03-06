import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";
import './App.css'
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
      // <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
     <div className="bg-slate-500">
       <div className='bgg overflow-hidden max-w-[1500px] mx-auto'> 
      
      <Nav></Nav>
      <Banner></Banner> 
      <div className="dividerr"></div>
      <About></About>
      <div className="dividerr"></div>
      <Services></Services>
      <div className="dividerr"></div>
      <Work></Work>
      <div className="dividerr"></div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
     </div>
  );
};

export default App;
