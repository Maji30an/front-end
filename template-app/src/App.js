import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";
import Cards from "./components/Cards";
import Seo from "./components/Seo";
import About from "./components/About";

function App() {
  return (
     <>
        <Header />
        <main className='container 3xl:container mx-auto h-screen'>
           <Customers />
           <Cards />
           <Seo />
           <About />
        </main>
     </>
  );
}

export default App;
