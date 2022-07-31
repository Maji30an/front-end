import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";
import Cards from "./components/Cards";
import Seo from "./components/Seo";
import About from "./components/About";
import Counter from "./components/Counter";
import Benfits from "./components/Benfits";

function App() {
  return (
     <>
        <Header />
        <main className='container 3xl:container mx-auto h-screen'>
           <Customers />
           <Cards />
           <Seo />
           <About />
           <Counter />
           <Benfits />
        </main>
     </>
  );
}

export default App;
