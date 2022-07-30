import React from "react";
import ListCustomers from "./current/ListCustomers";
import xacton from './../assets/img/1.svg';
import twinqo from './../assets/img/2.svg';
import fresh from './../assets/img/3.svg';
import spiner from './../assets/img/4.svg';
import fugiat from './../assets/img/5.svg';

const Customers = () => {
  return(
     <section className='pt-[46px] pb-[74px] rounded-[5px] shadow-[0_10px_40px_0_rgba(0,0,0,0.1)] my-[200px]'>
        <h4 className='font-bold text-center text-[28px] leading-[2.125rem]'>trusted by over <span className='text-[#CB0F4C]'>13,041+</span> happy customers, including</h4>
        <ul className='flex justify-evenly mt-[70px]'>
           <ListCustomers src={xacton} title={'Xacton'} color={'#5499E8'}/>
           <ListCustomers src={twinqo} title={'Twinqo'} color={'#D0154C'}/>
           <ListCustomers src={fresh} title={'Fresh'} color={'#2F9800'}/>
           <ListCustomers src={spiner} title={'Spiner'} color={'#CD1D65'}/>
           <ListCustomers src={fugiat} title={'Fugiat'} color={'#A61DB4'}/>
        </ul>
     </section>
  );
}

export default Customers;