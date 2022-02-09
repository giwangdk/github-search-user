import React from 'react';
import { Toggle } from '..';

function Header() {
    return (
        <header className="">
        <div className="flex justify-between items-center">
          <div className="header_name"><p className=" text-md md:text-xl lg:text-2xl  font-bold tracking-wider">devfinder</p></div>
          <div className="toggle">
            <Toggle/>  
          </div>
        </div>
      </header>
  );
}

export default Header;
