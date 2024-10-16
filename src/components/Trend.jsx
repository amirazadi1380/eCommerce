import { MdKeyboardArrowLeft } from "react-icons/md"
import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '/products',
        imageSrc: 'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Earthen Bottle',
        href: '/products',
        price: '$48',
        imageSrc: 'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '/products',
        price: '$35',
        imageSrc: 'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        color: 'Black',

    },
    {
        id: 4,
        name: 'Focus Paper Refill',
        href: '/products',
        price: '$89',
        imageSrc: 'https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        color: 'Black',

    }
]

export default function Trend() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="w-full justify-between flex">
                    <Link to='/products' className="px-5 py-1.5 text-gray-800 border border-gray-800 hover:bg-black hover:text-white duration-150 ease-linear flex items-center justify-center"><MdKeyboardArrowLeft /><span>مشاهده همه</span></Link>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">محصولات محبوب</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:brightness-50 duration-150 ease-in  lg:h-80">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
