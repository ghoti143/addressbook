import { FunctionComponent } from 'react';

import './NewPerson.css';
import { useForm } from 'react-hook-form';

type formValues = { firstName: string; lastName: string };

export const NewPerson: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<formValues>();

  return (
    <>
      <h2>Add a new person</h2>
      <form
        onSubmit={handleSubmit(data => {
          fetch('http://localhost:3000/people', {
            method: 'put',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
          });
        })}>
        <div>
          <label>First Name</label>
          <input {...register('firstName')} type='text' />
        </div>
        <div>
          <label>Last Name</label>
          <input {...register('lastName')} type='text' />
        </div>
        <input type='submit' />
      </form>
    </>
  );
};
