import React, { useContext } from 'react'
import { AppContext } from '../contextApi/Context'
import { useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
const features = ['تنظیمات بند چندگانه', 'ساخت دوخت', 'دسته و زبانه های چرمی', 'فضای داخلی جادار با زیپ بالا', 'مقاوم در برابر آب', 'حلقه های تسمه ضد زنگ']
export default function DetailItems() {
    const navigate = useNavigate()
    const { products, setBasketItems, basketItems } = useContext(AppContext)
    const param = useParams()
    const selectedProduct = products.find(item => item.name == param.title)
    const handleAddToBasket = () => {
        const storedBasketItems = JSON.parse(localStorage.getItem('basketItem')) || [];

        const updatedItems = [...storedBasketItems, selectedProduct];

        setBasketItems(updatedItems);
        localStorage.setItem('basketItem', JSON.stringify(updatedItems));

        toast.success('آیتم به سبد خرید اضافه شد');
    }


    return (
        <div className='py-20 mt-5'>
            <Toaster />
            <div className='mx-auto max-w-2xl lg:max-w-7xl grid grid-cols-1 lg:grid-cols-2  p-5 rounded-xl border-2 border-gray-400/10 gap-x-3 bg-gray-100/20'>
                <div className='grid grid-cols-1'>
                    <div className='w-full'>
                        <img src={selectedProduct.imageSrc} alt="image" className='w-full h-full object-cover object-center rounded-xl' />
                    </div>
                    <div className='grid grid-cols-4 gap-x-3 mt-5 rounded-lg pl-3 py-4 '>
                        <img src={selectedProduct.imageSrc} alt="image" className='w-full h-full object-cover object-center rounded-lg cursor-pointer opacity-60 hover:opacity-100 duration-150 ease-linear' />
                        <img src={selectedProduct.imageSrc} alt="image" className='w-full h-full object-cover object-center rounded-lg cursor-pointer opacity-60 hover:opacity-100 duration-150 ease-linear' />
                        <img src={selectedProduct.imageSrc} alt="image" className='w-full h-full object-cover object-center rounded-lg cursor-pointer opacity-60 hover:opacity-100 duration-150 ease-linear' />
                        <img src={selectedProduct.imageSrc} alt="image" className='w-full h-full object-cover object-center rounded-lg cursor-pointer opacity-60 hover:opacity-100 duration-150 ease-linear' />
                    </div>
                </div>
                <div className='text-right pr-5 space-y-8 pt-10'>
                    <h1 className='text-3xl font-extrabold'>{selectedProduct.name}</h1>
                    <p className='text-2xl font-bold'>{selectedProduct.price}</p>
                    <p className='text-gray-400 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ad officia ut, placeat perferendis repellat reprehenderit ipsa consectetur dolorum dolores accusantium ullam sed, asperiores non. Debitis nesciunt unde sed accusamus magni eaque non maiores laborum, vel necessitatibus corrupti voluptatum deserunt cum modi minus est error magnam cupiditate, exercitationem soluta dignissimos neque! Iusto ab laborum ratione autem veniam doloribus labore vitae, atque deserunt vel fugit sed perferendis eveniet voluptates maxime debitis error quo velit quaerat. Sed a debitis nulla repellendus nihil!</p>
                    <button onClick={handleAddToBasket} className='bg-indigo-600 text-gray-200 p-2 text-sm rounded lg:text-lg'>اضافه کردن به سبد خرید</button>
                    <div>
                        <div className='ml-2 py-2 border-black/20  border-t border-b mx-auto mt-2'>
                            <h1 className='text-xl pb-2 font-bold text-gray-600'>ویژگی ها</h1>
                            <ul className='space-y-2 mt-4'>
                                {features.map((item, index) => <li className='text-gray-400' key={index}>{item} - </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
