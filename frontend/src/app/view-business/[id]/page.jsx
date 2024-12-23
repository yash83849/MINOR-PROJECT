'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ViewBusiness = () => {

  const { id } = useParams();
  const [businessDetails, setBusinessDetails] = useState(null);

  const fetchProductData = async () => {
    const res = await axios.get('http://localhost:5000/business/getbyid/' + id);
    console.log(res.data);
    setBusinessDetails(res.data);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  if (businessDetails === null) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div className='max-w-[90%] mx-auto'>


        <img src={businessDetails.image} className="h-80 w-full object-cover object-center rounded-lg" alt="" />

        <div className='mt-10'>
          <h1 className='text-2xl font-bold'>{businessDetails.name}</h1>
          <p>{businessDetails.category}</p>
          <p>{businessDetails.address}</p>
          <p>{businessDetails.contact}</p>
        </div>
      </div>

    </div>
  )
}

export default ViewBusiness;