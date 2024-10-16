import React from "react";
import '../styles/brands.css'
export default function Brands() {   
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl lg:text-3xl pb-10 font-semibold leading-8 text-gray-700">
          برندهایی که افتخار همراهی آن‌ها را داشته‌ایم
        </h2>
        <div className="relative overflow-hidden">
          {/* Container for scrolling logos */}
          <div className="flex animate-scroll items-center space-x-8">
            {/* Brand logos */}
            <img
              alt="Transistor"
              src="https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg"
              width={108}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="Reform"
              src="https://www.logo.wine/a/logo/Nike,_Inc./Nike,_Inc.-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="Tuple"
              src="https://www.logo.wine/a/logo/Louis_Vuitton/Louis_Vuitton-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="SavvyCal"
              src="https://www.logo.wine/a/logo/Gucci/Gucci-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="Statamic"
              src="https://www.logo.wine/a/logo/Puma_(brand)/Puma_(brand)-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="Transistor"
              src="https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg"
              width={108}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="Reform"
              src="https://www.logo.wine/a/logo/Nike,_Inc./Nike,_Inc.-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="Tuple"
              src="https://www.logo.wine/a/logo/Louis_Vuitton/Louis_Vuitton-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="SavvyCal"
              src="https://www.logo.wine/a/logo/Gucci/Gucci-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            <img
              alt="Statamic"
              src="https://www.logo.wine/a/logo/Puma_(brand)/Puma_(brand)-Logo.wine.svg"
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
            {/* Duplicated logos for smooth looping */}

          </div>
        </div>
      </div>
    </div>
  );
}
