import React, { memo } from 'react'
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-max-7xl z-50 bg-slate-950 text-white text-right '>
            
            {/* <img src="/images/footer3.webp" alt="footer"  className='w-full absolute object-cover brightness-50 z-0 h-[1200px] lg:h-full' /> */}
            <footer className='w-full flex justify-between items-center h-[1300px] lg:h-80 text-gray-200 flex-col lg:flex-row relative border-b border-white/20'>

                <div className='w-2/3 lg:w-1/3 h-full flex flex-col lg:p-10 items-center justify-center space-y-10 lg:space-y-5 text-xl font-bold z-50 pt-5'>
                    <p> <span className='cursor-pointer'>09175065996</span>: تلفن پشتیبانی</p>
                    <p className='text-center'>ایران - فارس - شیراز - خیابان  - پلاک  </p>
                    <Licenses />
                    <SocialIcons />
                </div>

                <div className='w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center text-center lg:flex-row lg:justify-end p-10 z-50'>
                    <AppDownload />
                    <CustomerServices />
                    <WhyBiotour />
                </div>

            </footer>
            <FooterCopyright />
        </div>
    )
}

const Licenses = memo(() => (
    <div className='w-full  space-x-2 h-32 flex z-50 justify-center'>
        <div className='border border-white/20 bg-white cursor-pointer rounded-lg w-20 h-20'><img src="/images/license/meli.png" alt="license" /></div>
        <div className='border border-white/20 bg-white cursor-pointer rounded-lg w-20 h-20'><img src="/images/license/etehadie.png" alt="license" /></div>
        <div className='border border-white/20 bg-white cursor-pointer rounded-lg w-20 h-20'><img src="/images/license/Enamad.png" alt="license" /></div>
    </div>
));

const SocialIcons = memo(() => (
    <div className='w-full flex justify-center items-center z-50'>
        <div className='w-20 h-[1.6px] bg-white/70 opacity-60' />
        <FaTelegramPlane className='cursor-pointer px-3 text-5xl hover:scale-150 ease-linear duration-100' />
        <FaInstagram className='cursor-pointer px-3 text-5xl hover:scale-150 ease-linear duration-100' />
        <FaWhatsapp className='cursor-pointer px-3 text-5xl hover:scale-150 ease-linear duration-100' />
        <div className='w-20 h-[1.6px] bg-white/70 opacity-60' />
    </div>
));

const AppDownload = memo(() => (
    <div className='w-52 h-full p-5 space-y-5 flex flex-col justify-center items-center'>
        <h2 className='text-xl font-bold'>دانلود اپلیکیشن</h2>
        <div className='flex space-y-3 justify-center flex-col w-full items-center'>
            <img src='/images/license/bazzar.png' className='w-32' />
            <img src='/images/license/myket.png' className='w-32' />
            <img src='/images/license/appstore.png' className='w-36' />
        </div>
    </div>
));

const CustomerServices = memo(() => (
    <div className='w-52 h-full p-5 space-y-5 flex flex-col'>
        <h1 className='text-xl font-bold'>خدمات مشتریان</h1>
        <a href='/' className='opacity-50 text-base'>درباره ما</a>
        <a href='/' className='opacity-50 text-base'>تماس با ما</a>
        <a href='/' className='opacity-50 text-base'>رسانه</a>
        <a href='/' className='opacity-50 text-base'>بیمه </a>
    </div>
));

const WhyBiotour = memo(() => (
    <div className='w-52 h-full p-5 space-y-5 flex flex-col'>
        <h1 className='text-xl font-bold'>دسترسی سریع</h1>
        <h1 href='#' className='opacity-50 text-base'>خدمات</h1>
        <h1 href='#' className='opacity-50 text-base'>همکاری</h1>
        <h1 href='#' className='opacity-50 text-base'>بلاگ</h1>
        <h1 href='#' className='opacity-50 text-base'>قوانین و مقررات</h1>

    </div>
));

const FooterCopyright = memo(() => (
    <div className='text-gray-100 opacity-70 z-50 w-full h-14 flex justify-center items-center text-xs  border-t lg:border-black/10 border-white/50'>
            <p>created by <strong> azadyamyr1@gmail.com</strong></p>
        </div>
));

export default memo(Footer);
