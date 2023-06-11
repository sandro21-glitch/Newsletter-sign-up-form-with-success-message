import React, { useEffect } from 'react'
import { useEmailContext } from '../context'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Success from './Success';

const Form = () => {

    const { value,setInputValue,submitForm,error } = useEmailContext()

  return (
    <form onSubmit={(e) => submitForm(e)}>
        {/* form control */}
        <div className='flex flex-col items-start mb-5'>
            <label className='text-DarkSlateGrey font-bold mb-2 w-full'>
                <div className='flex items-center justify-between w-full'>
                    <p>Email address</p>
                    {error && <p className='text-Tomato'>Valid email required</p>}
                </div>
            </label>
            <input 
                onChange={(e) => setInputValue(e)} 
                value={value} 
                type="text" 
                placeholder='email@company.com' 
                className={`border w-full p-4 rounded-lg outline-none ${error ? 'border-Tomato bg-red text-Tomato' : 'border-Grey bg-transparent'}`} />
        </div>
        <button
            type='submit'
            className='border w-full p-4 bg-DarkSlateGrey hover:bg-gradient transition-allw ease-in duration-150 text-white font-bold rounded-lg'
            >
            Subscribe to monthly newsletter
            </button>
    </form>
  )
}

export default Form
