
const callouts = [
    {
      name: 'میز و صندلی',
      description: 'Work from home accessories',
      imageSrc: 'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/products',
    },
    {
      name: 'لوازم تحریر',
      description: 'Journals and note-taking',
      imageSrc: 'https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/products',
    },
    {
      name: 'لوازم جانبی',
      description: 'Daily commute essentials',
      imageSrc: 'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/products',
    },
  ]
  
  export default function Category() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-right  my-5 rounded-xl">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">دسته بندی محصولات</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-[500px]">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center group-hover:brightness-50 duration-150 ease-in "
                    />
                    <h1 className="absolute top-0 inset-0 flex justify-center items-center -mt-[600px] text-white group-hover:mt-0 duration-300 font-extrabold text-5xl ease-linear">{callout.name}</h1>
                  </div>
                  <h3 className="mt-6 text-gray-500 text-center font-bold text-xl">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  {/* <p className="text-base font-semibold text-gray-900 mt-2">{callout.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  