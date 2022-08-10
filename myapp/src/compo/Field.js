import React, {useContext} from "react";
import LanguageTranslate from "../context/LanguageTranslate";

const Field = (props) => {
   const context = useContext(LanguageTranslate);
   const text = context === 'english' ? 'Name' : 'نام خانوادگی';
   return(
      <div className="mb-4">
         <label className="form-label">{text}</label>
         <input className="form-control"/>
      </div>
   );
}

export default Field;