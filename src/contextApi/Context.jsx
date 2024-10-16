import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export default function Context({ children }) {
    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: 48,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: 35,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: 89,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: 35,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'Earthen Bottle',
            href: '#',
            price: 48,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 6,
            name: 'Nomad Tumbler',
            href: '#',
            price: 35,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 7,
            name: 'Focus Paper Refill',
            href: '#',
            price: 89,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 8,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: 35,
            imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
    ]
    const [basketItems, setBasketItems] = useState([])
    return (
        <AppContext.Provider value={{ basketItems, setBasketItems, products }}>
            {children}
        </AppContext.Provider>
    )
}
