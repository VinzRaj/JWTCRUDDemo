import React from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/login'>Sign In</Link>
        </li>
        <li>
          <Link to='/register'>Sign UP</Link>
        </li>
      </ul>
    </div>
  );
};
