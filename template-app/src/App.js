import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";
import Cards from "./components/Cards";
import Seo from "./components/Seo";

function App() {
  return (
     <>
        <Header />
        <main className='container 3xl:container mx-auto h-screen'>
           <Customers />
           <Cards />
           <Seo />
        </main>
     </>
  );
}

export default App;
