import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";
import Services from "./components/Services";
import Seo from "./components/Seo";
import About from "./components/About";
import Counter from "./components/Counter";
import Benfits from "./components/Benfits";
import Testimonial from "./components/Testimonial";

function App() {
  return (
     <>
        <Header />
        <main className='container 3xl:container mx-auto h-screen'>
           <Customers />
           <Services />
           <Seo />
           <About />
           <Counter />
           <Benfits />
           <Testimonial />
        </main>
     </>
  );
}

export default App;
