import React from 'react'

export const LocationButton = () => {
    return (
        <>
        <button className='bg-locations-gray rounded-xl w-16 md:w-24 h-auto md:p-1 lg:w-28 focus:border-black focus:border-2 '>
            <p className='sm:text-lg'>La Playa</p>
            <p className='sm:text-lg'>$65</p>
        </button>
        </>
    )
}
export default LocationButton;