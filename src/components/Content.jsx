import { MdClose, MdCloud, MdOutlineSearch, MdOutlineSupervisedUserCircle, MdSupervisedUserCircle } from "react-icons/md";

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
export default function Content() {
    useGSAP(() => {
        gsap.to('#content', {
            opacity: 1, y: 5, stagger: 0.3, delay: 0.2, scrollTrigger: {
                trigger: "#content"
            }
        })
        gsap.fromTo('#content_img', { opacity: 0, x: 355 },{opacity:1,x:1,delay:0.5,scrollTrigger:{
            trigger:"#content"
        }})
    })
    return (
        <div className="relative overflow-hidden bg-slate-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 z-10 opacity-10 overflow-hidden isolate">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0 text-right">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg ">
                            {/* <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p> */}
                            <h1 id="content" className="opacity-0 mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">آنلاین شاپ چیست</h1>
                            <p id="content" className="opacity-0 mt-6 text-xl leading-8 text-gray-600">
                                آنلاین شاپ امروزه با گسترش تکنولوژی و فضای مجازی در کشور یکی از بهترین گزینه ها برای ایجاد درآمد بالا و راه اندازی کسب و کار می باشد
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-2 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden shadow">
                    <img id="content_img"
                        alt="product"
                        src="https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl  shadow-black/30 ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:mb-64">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            {/* <p>
                                دیگر زمان کسب و کار های سنتی به اتمام رسیده و اجاره کردن مغازه برای کسب درآمد شاید نتواند تنها راه باری کسب درآمد بیشتر باشد. اگر میخواهید از سایر رقبا خود سبقت بگیرید و چند پله صعود داشته باشید راه اندازی آنلاین شاپ در این مسیر میتواند شما را بسیار کمک کند
                                امروزه اعتماد مردم به این آنلاین شاپ ها روز به روز در حال افزایش است و مردم به این آنلاین شاپ ها اعتماد بیشتری میکنند زیرا باتوجه به درگیری زیاد مردم نمیخواهند درگیری رفت و آمد و بحث ترافیک شوندو ترجیح میدهند محصولات مورد نظر خود را به صورت آنلاین خریداری کنند
                            </p> */}
                            <ul role="list" className="mt-8 space-y-8 text-gray-500 bg-white  p-5 rounded-lg">
                                <li id="content" className="opacity-0 flex gap-x-3 justify-end">
                                    <span>
                                        <strong className="font-semibold text-gray-900 ">فضای ابری </strong>امروزه فضای ابری نقش اساسی در  دنیای اینترنت ارایه میدهد
                                    </span>
                                    <MdCloud className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                </li>
                                <li id="content" className="opacity-0 flex gap-x-3">
                                    <span>
                                        <strong className="font-semibold text-gray-900 ">امنیت شبکه </strong> یکی از مهم ترین و حیاتی ترین وظایف حفظ اطلاعات و امنیت شبکه میباشد
                                    </span>
                                    <MdClose className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                </li>
                                <li id="content" className="opacity-0 flex gap-x-3">
                                    <span>
                                        <strong className="font-semibold text-gray-900 ">تحقیقات </strong> فعالیت گسترده و به روز در زمینه مرتبط با کار خود به پیشرفت شرکت کمک میکند
                                    </span>
                                    <MdOutlineSearch className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                </li>
                            </ul>
                            <p id="content" className="opacity-0 mt-8 text-gray-500">
                                همان طور که میدانید راه اندازی آنلاین شاپ میتواند شما را به سود زیادی برساند اما اولین قدم برای این کار ساخت سایت میباشد. اگر میخواهید در کوتاهترین زمان سایت تان راه اندازی شود و یک سایت حرفه ای داشته باشید و کسب و کار خود را رونق بخشید از خدمات طراحی سایت ارزان ما غافل نشوید
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
