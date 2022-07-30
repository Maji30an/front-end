import './App.css';
import Header from "./components/Header";
import Customers from "./components/Customers";

function App() {
  return (
     <>
        <Header />
        <main className='3xl:container mx-auto h-screen'>
           <Customers />
           <div className='text-center'>
              <span className='text-[#CB0F4C] font-[Poppins] font-medium text-[28px] leading-[35px] tracking-[0.045em]'>Services</span>
              <h3 className='font-bold text-5xl leading-[60px] tracking-[0.045em]'>What We Offer</h3>
              <p className='text-[#362424] font-normal text-2xl leading-[30px] tracking-[0.045em]'>Ea nam dicat utamur tincidunt, cu sea audiam vocibus. Esse nemore mei eu.
                 Virtute commune dissentiet te pri, te sonet periculis mel.</p>
           </div>
        </main>
     </>
  );
}

export default App;
