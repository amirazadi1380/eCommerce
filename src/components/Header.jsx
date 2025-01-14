
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(useGSAP);
export default function Header() {
    const navigate = useNavigate()
    useGSAP(()=>{
        gsap.to('#header',{opacity:1,y:20,stagger:0.5,delay:0.5})
    })
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-44 text-right rounded-b-3xl">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-4xl px-6 lg:px-8  items-end flex flex-col">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 id='header' className="text-4xl font-bold tracking-tight text-white sm:text-6xl opacity-0">گالــــری امیـــــر</h2>
                    <p id='header' className="mt-10 text-lg leading-8 text-gray-500 opacity-0">
                    اگر در فضای مجازی فعالیت کنید حتما انلاین شاپ هایی را میبینید که محصولات مختلفی از جمله محصولات ارایشی بهداشتی، محصولات خانگی و … را به صورت آنلاین و مجازی به فروش می رسانن                    </p>
                <button onClick={()=>navigate('/products')} id='header' className="px-5 py-3 text-white border border-white mt-10 hover:bg-white hover:text-black duration-150 ease-linear opacity-0">مشاهده محصولات</button>
                </div>

            </div>
        </div>
    )
}
