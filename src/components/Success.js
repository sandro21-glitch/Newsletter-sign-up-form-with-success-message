import React from 'react'
import success from '../assets/images/icon-success.svg'
import { useEmailContext } from '../context'
import { Link } from 'react-router-dom'
const Success = () => {
    const {value,handleBack} = useEmailContext()
  return (
    <section className='h-screen md:flex md:items-center md:justify-center '>
        <article className='flex flex-col items-start justify-between h-full md:h-auto bg-white p-10 md:max-w-[30rem] mx-auto md:rounded-[2rem]'>
            <header className='mt-20 md:mt-0 md:mb-10'>
                <img src={success} alt="success logo" className='mb-10 md:mb-5' loading='lazy' />
                <h1 className='text-5xl text-CharcoalGrey font-bold mb-10 md:mb-5'>Thanks for Subscribing!</h1>
                <p className="text-para">
                    A confirmation email has been sent to <span className='text-black font-bold'>{value}</span>. 
                    Please open it and click the button inside to confirm your subscription.
                </p>
            </header>
            {/* button */}
            <div className='pb-10 md:pb-0 w-full'>
                <button onClick={handleBack} className='border block text-center w-full p-5 md:p-3 bg-DarkSlateGrey hover:bg-gradient transition-all ease-in duration-150 text-white font-bold rounded-lg'>
                    Dismiss message
                </button>
            </div>
        </article>
    </section>
  )
}

export default Success
