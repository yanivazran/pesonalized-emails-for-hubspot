import React, { useState, useEffect } from 'react';
import { useField } from 'formik';

export default function TextInput ({ label, helpText, ...props }) {
  const [field, meta, helpers] = useField(props);
  const [fieldInFocus,setFieldInFocus] = useState(false)
  
var styleClases = {inputClass:"" , divClass:""}

  if((fieldInFocus && field.value )|| meta.touched){
    if(meta.error )
    {
      
      styleClases = {inputClass:"is-invalid" , divClass:"invalid-feedback"}
      
    }
    else{
      styleClases = {inputClass:"is-valid" , divClass:"valid-feedback"}

    }

  }

  return (
    <div className="form-outline  mb-3 ">
      <label className="form-label" htmlFor={props.id}>{label}</label>
      <input
        {...props}
        {...field}
        className={`shadow-sm bg-body rounded form-control  ${styleClases.inputClass} `}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={()=> setFieldInFocus(true)}   
      />
      
      <div
        id={`${props.id}-feedback`}
        aria-live="polite"
        className={` ${styleClases.divClass} `}>
          {meta.error ? meta.error : ''}
      </div>
    </div>
 );
};

