import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function LogForm() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="px-4 py-20 mx-auto max-w-7xl ">
      <a href="/" title="Kutty Home Page" className="flex items-center justify-center sm:justify-center">
        <img src="/logo.png" alt="logo" className='w-28 h-28' />
      </a>
      <div
        className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5  shadow-lg shadow-black/30"
      >
        <h1 className="mb-10 text-xl font-light text-center text-gray-800 sm:text-center">ورود</h1>
        <form onSubmit={(e) => {
          e.preventDefault()


        }} className="pb-1 space-y-4  text-center justify-center flex flex-col items-center px-5">
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">نام کاربری</span>
            <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="نام کاربری" required />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">رمز عبور</span>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required />
          </label>

          <div className="flex  items-start justify-between sm:items-center sm:flex-row">
            <button type="submit" className="w-24 p-1 rounded-lg text-gray-100 bg-blue-600"  >ورود</button>
          </div>
        </form>
      </div>

    </div>
  )
}
