'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ListBusiness = () => {

  const [businessList, setBusinessList] = useState([]);

  const fetchBusinessData = async () => {
    const res = await axios.get('http://localhost:5000/business/getall')
    console.log(res.data);
    setBusinessList(res.data);
  }

  useEffect(() => {
    fetchBusinessData();
  }, [])


  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
           
            
          </div>
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* product - start */}

            {
              businessList.map(business => (
                <div key={business._id}>
                  <Link
                    href={'/view-business/' + business._id}
                    className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                  >
                    <img
                      src={business.image}
                      loading="lazy"
                      alt="Photo by Rachit Tank"
                      className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </Link>
                  <div>
                    <p
                      className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                    >
                      {business.category}
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="font-bold text-gray-800 lg:text-lg">{business.name}</span>
                    </div>
                  </div>
                </div>
              ))
            }
            {/* product - end */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ListBusiness;