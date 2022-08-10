import React, {useState} from "react";
import "../App.css";
import UserCreate from "./UserCreate";
import LanguageTranslate from "../context/LanguageTranslate";

function Sample() {
   const [lang, setLang] = useState('english');

   return(
      <div className="container mt-3">
         <div className="row">
            <div className="col">
               <span className="fs-1 me-3">Select Language: </span>
               <button className="btn btn-primary btn-lg" onClick={() => setLang('english')}>English</button>
               <button className="btn btn-success btn-lg" onClick={() => setLang('persian')}>Persian</button>
            </div>
         </div>
         <div className="row">
            <LanguageTranslate.Provider value={lang}>
               <UserCreate />
            </LanguageTranslate.Provider>
         </div>
      </div>
   );
}

export default Sample;