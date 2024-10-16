import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
export default function SignForm({ setIsLoggedIn }) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [rPassword, setRPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (password == rPassword) {
            const formData = new FormData()
            formData.append('username', username)
            formData.append('password', password)
            axios.post('http://localhost/blog/controlers/signup.php', formData).then(res => toast.success('اکانت با موفقیت ساخته شد')).catch(err => console.error(err))
        }
        else {
            toast.error("رمز عبور مطابقت ندارد")
        }
        setIsLoading(false)
    }
    return (
        <div className="px-4 py-20 mx-auto max-w-7xl">
            <Toaster position="top-left"
                reverseOrder={false} />
            <a href="/" title="آزادی" className="flex items-center justify-center sm:justify-center">
                <img src="/logo.png" alt="logo" className='w-28 h-28' />
            </a>
            <div
                className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 z-50 border-gray-200 rounded-lg bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5  shadow-lg shadow-black/30"
            >
                <h1 className="mb-5 text-xl font-light text-center text-gray-800 sm:text-center">ثبت نام</h1>
                <form onSubmit={handleSubmit} className="pb-1 space-y-4  text-right px-5">
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">نام</span>
                        <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="نام کاربری" required />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">رمز عبور</span>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">تکرار رمز عبور</span>
                        <input onChange={(e) => setRPassword(e.target.value)} type="password" placeholder="••••••••" required />
                    </label>
                    <div className="flex  items-start justify-center sm:items-center sm:flex-row space-x-20">
                        {isLoading ? <>loading...</> :
                            <>
                                <label className="flex items-center">
                                    <input type="checkbox" className="w-4" required />
                                    <span className="block ml-2 text-[8px]  lg:text-xs font-medium text-gray-700 cursor-pointer">موافقت با قوانین و مقررات</span>
                                </label>
                                <button type="submit" className="w-24 p-1 rounded-lg text-gray-100 bg-blue-600"  >ثبت نام</button>
                            </>}
                    </div>
                </form>
            </div>
            <p className="my-0 text-xs font-medium text-center text-gray-200 sm:my-5 tracking-wide pt-10 lg:pt-3">
                <button onClick={() => setIsLoggedIn(prev => !prev)} className="text-purple-700 hover:text-purple-900 mr-1">ورود</button>
                قبلا ثبت نام کردی؟
            </p>
        </div>)
}
