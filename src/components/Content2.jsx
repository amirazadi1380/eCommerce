// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { MdClose, MdCloud, MdFingerprint, MdSearch, MdSecurity } from "react-icons/md"

const features = [
  {
    name: 'فضای ابری ',
    description:
      'امروزه فضای ابری نقش اساسی در  دنیای اینترنت ارایه میدهد',
    icon: MdCloud,
  },
  {
    name: 'امنیت شبکه',
    description:
      'یکی از مهم ترین و حیاتی ترین وظایف حفظ اطلاعات و امنیت شبکه میباشد ',
    icon: MdSecurity,
  },
  {
    name: 'تحقیقات ',
    description:
      'فعالیت گسترده و به روز در زمینه مرتبط با کار خود به پیشرفت شرکت کمک میکند ',
    icon: MdSearch,
  },
  {
    name: 'همکاری با ما',
    description:
    'فعالیت گسترده و به روز در زمینه مرتبط با کار خود به پیشرفت شرکت کمک میکند ',
    icon: MdFingerprint,
  },
]

export default function Content2() {
  return (
    <div className="bg-slate-900  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-right lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            آنلاین شاپ امیـــــر
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            آنلاین شاپ امروزه با گسترش تکنولوژی و فضای مجازی در کشور یکی از بهترین گزینه ها برای ایجاد درآمد بالا و راه اندازی کسب و کار می باشد
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 text-right pr-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
