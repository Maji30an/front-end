import './App.css';
import {useState} from "react";

function App() {

   const initialValue = {name:'', email:'', phone:'', image:''};
   const [user, setUser] = useState(initialValue);
   const [users, setUsers] = useState([]);
   const [editUser, setEditUser] = useState(0);
   const [isEdit, setIsEdit] = useState(false);

   const handlerChange = (e) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value,
      });
   }

   const checkUserNull = Object.values(user).every(item => item.trim === '' ? false : true);

   const handlerSubmit = (e) => {
     e.preventDefault();
     if (checkUserNull){
        if (isEdit){
           setUsers(users.map((item, index) => index === editUser ? user : item));
           setIsEdit(false);
        }else {
           setUsers([
              ...users,
              user,
           ]);
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

   const handlerFile = (e) => {
      setUser({...user, image: URL.createObjectURL(e.target.files[0])});
   }

   return(
      <div className='App container-fluid'>
         <div className='pt-3 px-4'>
            <div className='row justify-content-between'>
               <section className='col-3'>
                  <form onSubmit={handlerSubmit}>
                     <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={user.name} onChange={handlerChange} required/>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={user.email} onChange={handlerChange} required/>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" name="phone" value={user.phone} onChange={handlerChange} required/>
                     </div>
                     <div className="mb-5">
                        <label htmlFor="formFile" className="form-label">file input</label>
                        <input className="form-control" type="file" name="formFile" onChange={handlerFile} required />
                     </div>
                     <button type="submit" className="btn btn-primary w-100">Add</button>
                  </form>
               </section>
               <section className='col-8'>
                  <div className='row text-dark'>
                     {users.map((user, index) =>
                        <div className='col-3'>
                           <div className="card" key={index}>
                              <img src={user.image} className="card-img-top" />
                              <div className="card-body">
                                 <h5 className="card-title">{user.name}</h5>
                                 <p className="card-text">{user.email}</p>
                                 <p className="card-text">{user.phone}</p>
                                 <div className="d-flex w-100 justify-content-between">
                                    <a className="btn btn-warning btn-sm" onClick={() => handlerEdit(index)}>Edit</a>
                                    <a className='btn btn-danger btn-sm' onClick={() => handlerDelete(index)}>Delete</a>
                                 </div>
                              </div>
                           </div>
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
