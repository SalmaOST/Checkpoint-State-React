import React, { useState } from 'react';
import Profile from './profile';

const Button = () => {
    const [show, setShow] = useState(false)
    return (
      <>
        <button className="button" onClick={() =>setShow(true)} > Show information </button>
      {show ? <Profile/> : null}
      
      <button className="button" onClick={() =>setShow(false)} > Hide information </button>
      {show ? null  : null}
      
      
      </>
 );
};
export default Button ;















