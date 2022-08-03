import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";
import Services from "./components/Services";
import Seo from "./components/Seo";
import About from "./components/About";
import Counters from "./components/Counters";
import Benfits from "./components/Benfits";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
     <div className="font-balsamiq bg-navbar bg-contain bg-no-repeat">
        <Header />
        <main className='container mx-auto'>
           <Customers />
           <Services />
           <Seo />
           <About />
           <Counters />
           <Benfits />
           <Testimonial />
           <Blog />

        </main>
        <Footer />
     </div>
  );
}

export default App;
