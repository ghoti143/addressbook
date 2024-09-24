import { FunctionComponent } from 'react';
import './Header.css';

export const Header: FunctionComponent = () => {
  return (
    <div className='header'>
      <a href='/'>Address List</a>
      <a href='/new'>New Address</a>
    </div>
  );
};
