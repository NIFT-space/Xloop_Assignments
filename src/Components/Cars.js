import React from 'react';
import Image from 'next/image';

function LatestModel(){

    const cars = [
        {
          id: 1,
          name: 'Tesla Model S',
          brand: 'Tesla',
          year: 2025,
          imgSrc: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg'
        },
        {
          id: 2,
          name: 'Ford Mustang Mach-E',
          brand: 'Ford',
          year: 2025,
          imgSrc: 'https://www.ford.ca/is/image/content/dam/na/ford/en_ca/images/mach-e/2025/dm/2025_Mustang_Mach-E_Premium_Sport_Appearance_Package_Gallery_01.tif?croppathe=1_16x7&wid=1920&fmt=webp'
        },
        {
          id: 3,
          name: 'BMW i4',
          brand: 'BMW',
          year: 2025,
          imgSrc: 'https://vehicle-images.dealerinspire.com/f6b3-11002228/WBY43HD08SFU15518/ad312fe5281391b92889fbbe6d6d75e6.jpg'
        },
        {
          id: 4,
          name: 'Audi Q4 e-tron',
          brand: 'Audi',
          year: 2025,
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4oFeM-abfiP-50HtcHLkFJqkERo--V-skg&s'
        },
        {
          id: 5,
          name: 'Mercedes EQS',
          brand: 'Mercedes-Benz',
          year: 2025,
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfV4SyjhVokzkls2huXz-6yxoB8zgi1TD4q6Y-zNcFsXhL4kQVyZu6lR-0FTByTHUhF0&usqp=CAU'
        },
        {
          id: 6,
          name: 'Porsche Taycan',
          brand: 'Porsche',
          year: 2025,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1200px-Porsche_Taycan_4S_IMG_3526.jpg'
        },
        {
          id:7,
          name: 'Suzuki Mehran',
          brand:'Suzuki',
          year:2009,
          imgSrc:'https://www.gari.pk/images/new/cars/2022-05/1972_1_20409.jpg'
        },
        {
          id:8,
          name: 'Toyota Hilux',
          brand:'Toyota',
          year:2015,
          imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2016_Toyota_HiLux_Invincible_D-4D_4WD_2.4_Front.jpg/960px-2016_Toyota_HiLux_Invincible_D-4D_4WD_2.4_Front.jpg'
        }

      ];

      return (
        <div className='border bg-white rounded-lg shadow-md'>
  <ul style={{ padding: '0', listStyleType: 'none' }} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {cars.map((car) => (
      <li key={car.id} className='p-4 bg-blue-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
        <div className='relative w-full h-40'>
          <Image 
            src={car.imgSrc} 
            alt={car.name} 
            width={150} 
            height={150} 
            className='object-cover w-full h-full rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-[10deg] hover:scale-110'
          />
        </div>
        <div className='mt-2'>
          <strong>{car.name}</strong> ({car.brand} - {car.year})
        </div>
      </li>
    ))}
  </ul>
</div>



      );
}
export default LatestModel