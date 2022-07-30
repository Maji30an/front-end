import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";

function App() {
  return (
     <>
        <Header />
        <main className='3xl:container mx-auto h-screen'>
            <Customers />
        </main>
     </>
  );
}

export default App;
