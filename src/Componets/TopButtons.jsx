import React from 'react';

function TopButtons() {
    // Array of cities with their ids and titles
    const cities = [
        {
            id: 1,
            title: 'London',
        },
        {
            id: 2,
            title: 'Sydney',
        },
        {
            id: 3,
            title: 'Tokyo',
        },
        {
            id: 4,
            title: 'Toronto',
        },
        {
            id: 5,
            title: 'Paris',
        },
    ];

    return (
        <div className='flex items-center justify-around my-6'>
            {/* Mapping through the cities array to render buttons */}
            {cities.map((city) => (
                <button
                    key={city.id}
                    className='px-4 py-2 mx-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none'
                >
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;
