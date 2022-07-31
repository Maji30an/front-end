import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";
import Cards from "./components/Cards";

function App() {
  return (
     <>
        <Header />
        <main className='3xl:container mx-auto h-screen'>
           <Customers />
           <Cards />
        </main>
     </>
  );
}

export default App;
