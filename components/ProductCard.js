import React from 'react';
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className="bg-adaingrey text-estatelinkwhite py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/African 3.png'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quickmed</h3>
              <p className="text-gray-600 mb-4">
              QuickMed is an Emergency Medical & Response Services (EMRS) platform that connects users to an array of quick medical services
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/needle 3.png'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Needle</h3>
              <p className="text-gray-600 mb-4">
                No matter what path you take to sell your home, we can help you navigate a successful sale.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/azare 3.png'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Azare</h3>
              <p className="text-gray-600 mb-4">
                We’re creating a seamless online experience – from shopping on the largest rental network,
                to applying, to paying rent.
              </p>
              <a href="/rent-homes" className="text-estatelinkpurple hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-estatelinkyellow hover:bg-estatelinkblack">Browse Homes</a>
            </div>
          </div>
          {/**card 4 */}
           {/* Card 3 */}
           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/geez.png'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                > </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Geez</h3>
              <p className="text-gray-600 mb-4">
                We’re creating a seamless online experience – from shopping on the largest rental network,
                to applying, to paying rent.
              </p>
              <a href="/rent-homes" className="text-estatelinkpurple hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-estatelinkyellow hover:bg-estatelinkblack">Browse Homes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
