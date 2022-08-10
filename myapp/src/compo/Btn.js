import React, {useContext} from "react";
import LanguageTranslate from "../context/LanguageTranslate";

const Btn = (props) => {
   const context = useContext(LanguageTranslate);
   const text = context === 'english' ? 'Submit' : 'ثبت نام';
   return <button className="btn btn-info btn-lg">{text}</button>
}

export default Btn;