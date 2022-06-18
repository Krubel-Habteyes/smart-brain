
import React from 'react';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
  return (
      <div className='Tilt pa3' style={{ height: '150px', width: '150px'}}>
       <div>
         <img style={{paddingTop: '5px'}} src={brain} alt="human brain icon"/>
       </div>
      </div>
  );
};

export default Logo;