'use client';
import React from 'react'
import { useFormik } from 'formik'

const Addbusiness = () => {
  // initializing formik
  const businessForm = useFormik({
    initialValues: {
      name: '',
      address: '',
      category: '',
      timing: '',
      contact: '',
      image: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {

      // setTimeout(() => {
      // console.log(values);
      // resetForm();
      //}, 2000);

      //fetch
      axios.post('http://localhost:5000/business/add', values)
        .then((result) => {
          toast.success('Business registered successfully');
          resetForm();
          // router.push('/login');
        }).catch((err) => {
          console.log(err);
          toast.error('Business registration failed');
          setSubmitting(false);

        });
      // send values to backend
    },
    //
  });

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Add Business
            </h2>
          </div>
          {/* text - end */}
          {/* form - start */}
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="Name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={businessForm.handleChange}
                value={businessForm.values.name}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                onChange={businessForm.handleChange}
                value={businessForm.values.address}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                onChange={businessForm.handleChange}
                value={businessForm.values.category}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="timing"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Timing
              </label>
              <input
                type="text"
                name="timing"
                onChange={businessForm.handleChange}
                value={businessForm.values.timing}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contact"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Contact
              </label>
              <input
                type="text"
                name="contact"
                onChange={businessForm.handleChange}
                value={businessForm.values.contact}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="flex items-center justify-between sm:col-span-2">

              <span className="text-sm text-gray-500"></span>
            </div>
            <p className="text-xs text-gray-400">
              {" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >

              </a>
              .
            </p>
          </form>
          {/* form - end */}
        </div>
      </div>

    </div>
  )
}

export default Addbusiness;