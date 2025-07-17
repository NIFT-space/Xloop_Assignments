'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
    model: Yup.string()
    .min(2, 'Model must be at least 2 characters long')
    .max(50, 'Model must be less than 50 characters')
    .required('Model is required'),
    year: Yup.string()
    .min(2, 'Year must be at least 2 characters long')
    .max(50, 'Year must be less than 50 characters')
    .required('Year is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const Form = () => {
  // Formik initialization
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      model:'',
      year:'',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true); // Set loading to true when submitting
      setTimeout(() => {
        alert('Form Submitted Successfully' );//+ JSON.stringify(values, null, 2));
        setIsSubmitting(false); // Set loading to false after submission
      }, 2000); // Simulating a 2-second delay for form submission
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register Your Vehicle</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Car Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full p-2 border border-gray-300 rounded-lg ${
              formik.touched.name && formik.errors.name ? 'border-red-500' : ''
            }`}
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="model" className="block text-gray-700 mb-2">Car Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            className={`w-full p-2 border border-gray-300 rounded-lg ${
              formik.touched.model && formik.errors.model ? 'border-red-500' : ''
            }`}
            {...formik.getFieldProps('model')}
          />
          {formik.touched.model && formik.errors.model && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.model}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="model" className="block text-gray-700 mb-2">Car Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            className={`w-full p-2 border border-gray-300 rounded-lg ${
              formik.touched.year && formik.errors.year ? 'border-red-500' : ''
            }`}
            {...formik.getFieldProps('year')}
          />
          {formik.touched.year && formik.errors.year && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.year}</div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full p-2 border border-gray-300 rounded-lg ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : ''
            }`}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>


        {/* Spinner for Form Submission */}
        <div className="mb-4">
          {isSubmitting ? (
            <div className="flex justify-center items-center">
              <div className="spinner-border animate-spin h-8 w-8 border-t-4 border-blue-500 border-solid rounded-full"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
