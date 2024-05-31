// src/RegistrationForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('Registration successful!');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          {...register('firstName', { required: 'Please enter your first name!' })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          {...register('lastName', { required: 'Please enter your last name!' })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Please enter your email!',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email!',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Please enter your password!',
            minLength: {
              value: 5,
              message: 'Password must be more than 4 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password cannot be more than 20 characters',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
