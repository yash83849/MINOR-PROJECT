'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Home = () => {

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
      <>

        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

            <section className="relative rounded-lg">

              <img
                src="https://media.secondstreetapp.com/2888706"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className=" inset-0 h-full w-full object-cover object-center"
              />
            </section>
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">

            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Our Near Local Business
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Beauty , Education , Hostels , ClothDriers , Coffee Shop
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">

              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">

                </div>
                <div className="text-sm text-indigo-200 sm:text-base">Car Rental</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">

                </div>
                <div className="text-sm text-indigo-200 sm:text-base">Banquet Hall</div>
              </div>

              <div className="flex flex-col items-center">

                <div className="text-sm text-indigo-200 sm:text-base">Online Chef Service</div>
              </div>

              <div className="flex flex-col items-center">

                <div className="text-sm text-indigo-200 sm:text-base">
                  Plumbers
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="grid max-w-[90%] mx-auto gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* product - start */}

          {
            businessList.slice(0, 4).map(business => (
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

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">

            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                We Hope to Connect with Millions of Customer on our Listing Website
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Thankyou For Visting on our Website
              </p>
            </div>
          </div>



        </div>


      </>

    </div>
  )
}

export default Home;