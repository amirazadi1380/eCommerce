
import { useContext, useState, } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { MdClose } from 'react-icons/md'
import { AppContext } from '../contextApi/Context'


export default function ShopBasket({ openBasket, setOpenBasket }) {
  
  const { basketItems } = useContext(AppContext)
  const [deletedItem,setDeletedItem] = useState(0)
  const storedBasketItems = JSON.parse(localStorage.getItem('basketItem')) || [];
  const updatedBasketItems = storedBasketItems?.filter(item=> item.id != deletedItem)
  localStorage.setItem('basketItem',JSON.stringify(updatedBasketItems))
  return (
    <Dialog open={openBasket} onClose={setOpenBasket} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg-black/80">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between pb-2">
                    <DialogTitle className="text-2xl font-extrabold text-gray-700">سبد خرید</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpenBasket(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <MdClose aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {updatedBasketItems.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">

                                <div className="flex">
                                  <button onClick={()=>setDeletedItem(product.id)} type="button" className="font-medium text-red-600 hover:text-indigo-500">
                                    حذف
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>{storedBasketItems?.reduce((a,b)=>a + b.price,0)}$</p>
                    <p>قیمت کل</p>
                  </div>
                  {/* <p className="mt-0.5 text-xs text-gray-500">با احتساب مالیت </p> */}
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      تکمیل خرید
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      {' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        ادامه خرید
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
