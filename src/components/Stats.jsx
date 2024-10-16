const stats = [
    { id: 1, name: 'محصولات آینده', value: '44 million' },
    { id: 2, name: 'کالاهای فروخته شده', value: '$119 trillion' },
    { id: 3, name: 'تعداد کابران فعال', value: '46,000' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-slate-900 text-white py-24 sm:py-20 rounded-lg lg:rounded">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-stone-400 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  