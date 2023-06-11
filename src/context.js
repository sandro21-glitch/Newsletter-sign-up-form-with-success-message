import React, { useContext, useState,useEffect } from 'react'
export const EmailContext = React.createContext()

const FormContext = ({children}) => {
    const [value,setValue] = useState('')
    const [error,setError] = useState(false)
    const [isSuccess,setIsSuccess] = useState(false)

    const isValidEmail = (email) => {
        return /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/.test(email);
      }

    const setInputValue = (e) => {
        setValue(e.target.value)
    }

    const submitForm = (e) => {
      e.preventDefault();
      const isValid = isValidEmail(value);
      if (!isValid) {
        setIsSuccess(false);
        setError(true);
      } else {
        setIsSuccess(true);
        setError(false);
      }
    };
    
    // back
    const handleBack = () => {
      setIsSuccess(false)
    }
  
  return (
    <EmailContext.Provider value={{value,setInputValue,submitForm,error,isSuccess,handleBack}}>
      {children}
    </EmailContext.Provider>
  )
}

export const useEmailContext = () => {
    return useContext(EmailContext)
}

export default FormContext
