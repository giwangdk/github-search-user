import React from 'react';

function Header() {
    return (
        <header className="">
        <div className="flex justify-between items-center">
          <div className="header_name"><p className=" text-md md:text-xl lg:text-2xl  font-bold tracking-wider">devfinder</p></div>
          <div className="toggle">
            <span className="text-lg sm:text-xl font-semibold text-gray-400">Dark</span>
          </div>
        </div>
      </header>
  );
}

export default Header;
