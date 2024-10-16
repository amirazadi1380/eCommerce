import React, { useState } from 'react'
import SignForm from './SignForm'
import LogForm from './LogForm'
import BackVideo from './BackVideo'
export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className='w-full h-[950px] lg:h-[780px] relative'>
            <BackVideo/>
            {isLoggedIn ? <LogForm /> : <SignForm setIsLoggedIn={setIsLoggedIn} />}
        </div>
    )
}
