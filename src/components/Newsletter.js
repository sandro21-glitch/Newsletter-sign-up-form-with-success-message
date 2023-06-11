import React from 'react'
import coverMobile from '../assets/images/illustration-sign-up-mobile.svg'
import coverDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import logo from '../assets/images/icon-list.svg'
import Form from './Form'
import { useEmailContext } from '../context'
import Success from './Success'

const Newsletter = () => {

    const {isSuccess} = useEmailContext()
    
    if(isSuccess) {
        return <Success />
    }
    
  return (
    <section className='w-full md:flex md:items-center md:justify-center md:h-screen md:px-5'>
        <article className='bg-white md:max-w-[60rem] h-fit md:flex
         md:flex-row-reverse md:items-center md:p-5 md:rounded-lg'>
            {/* image wrapper */}
            <div className='md:ml-5'>
                <img src={coverMobile} alt="" className='w-full h-auto md:hidden' loading='lazy' />
                <img src={coverDesktop} alt="" className='w-full h-auto bg-cover hidden md:block' loading='lazy' />
            </div>
            {/* content */}
            <div className='p-5 md:p-5 md:w-1/2'>
                {/* header content */}
                <header className='py-5 md:py-0'>
                    <h2 className='text-5xl font-bold text-black mb-5'>Stay Updated!</h2>
                    <p className='text-para mb-5'>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className='space-y-3 mb-10'>
                        <li className='flex items-center gap-4 font-semibold text-DarkSlateGrey'>
                            <img src={logo} alt="" />
                            <span>Product discovery and building what matters</span>
                        </li>
                        <li className='flex items-center gap-4 font-semibold text-DarkSlateGrey'>
                            <img src={logo} alt="" />
                            <span>Measuring to ensure updates are a success</span>
                        </li>
                        <li className='flex items-center gap-4 font-semibold text-DarkSlateGrey'>
                            <img src={logo} alt="" />
                            <span>And much more!</span>
                        </li>
                    </ul>
                </header>
                {/* form content */}
                    <Form />
            </div>
        </article>
    </section>
  )
}

export default Newsletter
