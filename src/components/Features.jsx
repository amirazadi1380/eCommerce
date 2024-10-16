const features = [
    { name: 'سازنده', description: 'Designed by Good Goods, Inc.' },
    { name: 'مواد', description: 'پایه گردویی جامد با آهنرباهای خاکی کمیاب و روکش کارت فولادی با روکش پودری' },
    { name: 'ابعاد', description: '6.25" x 3.55" x 1.15"' },
    { name: 'اتمام', description: 'سمباده دستی و با روغن طبیعی تمام شده است' },
    { name: 'شامل', description: 'سینی کارت چوبی و 3 بسته پر کردن مجدد' },
    { name: 'ملاحظات', description: 'ساخته شده از مواد طبیعی. دانه و رنگ با هر مورد متفاوت است' },
  ]
  
  export default function Features() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 bg-slate-900 text-gray-100 mt-20 rounded-xl text-right">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">مشخصات فنی</h2>
            <p className="mt-4 text-gray-500">
            سینی کارت چوب گردو به دقت آسیاب شده است تا کاملاً روی دسته ای از کارت های فوکوس قرار گیرد. پودر پوشش داده شده است
              تقسیم‌کننده فولادی کارت‌های فعال را از کارت‌های جدید جدا می‌کند یا می‌تواند برای بایگانی لیست وظایف مهم استفاده شود
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-200">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src="https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-lg bg-gray-100 h-96"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src="https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-lg bg-gray-100 h-96"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-lg bg-gray-100 h-96"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src="https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-lg bg-gray-100 h-96"
            />
          </div>
        </div>
      </div>
    )
  }
  