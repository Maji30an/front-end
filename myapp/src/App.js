import './App.css';
import {useState} from "react";
import Button from "./components/current/Button";
import Input from "./components/current/Input";
import Card from "./components/Card";

function App() {

   const initialValue = {name:'', email:'', phone:'', image:''};
   const [user, setUser] = useState(initialValue);
   const [users, setUsers] = useState([]);
   const [editUser, setEditUser] = useState(-1);
   const [isEdit, setIsEdit] = useState(false);

   const handlerChange = (e) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value,
      });
   }
   const handlerFile   = (e) => {
      setUser({
         ...user,
         image: URL.createObjectURL(e.target.files[0]),
      });
   }
   const checkUserNull = Object.values(user).every(item => item.trim() !== '');

   const handlerSubmit = (e) => {
     e.preventDefault();
     if (checkUserNull){
        if (isEdit){
           setUsers(users.map((item, index) => index === editUser ? user : item));
           setIsEdit(false);
        }else {
           setUsers([...users, user]);
        }
        setUser(initialValue);
     }
   }

   const handlerDelete = id => {
      const items = users.filter((user, index) => index !== id)
      setUsers(items);
   }

   const handlerEdit = index => {
      setEditUser(index);
      setUser(users[index]);
      setIsEdit(true);
   }

   return(
      <div className='App container-fluid'>
         <div className='pt-3 px-4'>
            <div className='row justify-content-between'>
               <section className='col-3'>
                  <form onSubmit={handlerSubmit}>
                     <Input type='text'  name='name'  label='Name'  value={user.name}  change={handlerChange}/>
                     <Input type='email' name='email' label='Email' value={user.email} change={handlerChange}/>
                     <Input type='tel'   name='phone' label='Phone' value={user.phone} change={handlerChange}/>
                     <Input type='file'  name='formFile' label='Upload File' change={handlerFile}/>
                     <Button type='submit' value='Add' class="btn btn-primary w-100"/>
                  </form>
               </section>
               <section className='col-8'>
                  <div className='row text-dark'>
                     {users.map((user, index) =>
                        <div className='col-3' key={index}>
                           <Card {...user} edit={() => handlerEdit(index)} delete={() => handlerDelete(index)}/>
                        </div>
                     )}
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
}

export default App;
