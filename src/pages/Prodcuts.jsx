import { Link} from "react-router-dom"
import Pagination from "../components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "../contextApi/Context"


  
  export default function Products() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const {products} = useContext(AppContext)
    return (
      
      <div className="bg-white rounded-xl shadow shadow-black/10">
        <div className="mx-auto text-right max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="font-bold text-3xl pb-5 sr-only">محصولات</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to={`/products/${product.name}`} key={product.id} href={product.href} className="group">
                <div className=" w-full overflow-hidden rounded-lg bg-gray-500  shadow-xl shadow-gray-700/10">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:brightness-50 duration-150 ease-in "
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}$</p>
              </Link>
            ))}
          </div>
          <Pagination/>
        </div>
      </div>
    )
  }
  