/* eslint-disable no-unused-vars */
import React from "react";
import logoutIcon from '../../assets/logout.svg';
import PropTypes from "prop-types";


const Header = ({ data, handleLogOut }) => {
  // console.log();


  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl ">
        Hello, <br />{" "}
        <span className='font-semibold text-3xl'>{data?.firstName || 'Guest'}👋</span>
        {/* <span className="font-semibold text-3xl">{data.firstName}👋</span> */}
      </h1>
      <button
        onClick={() => {
          handleLogOut();
        }}
        className='px-4 py-2 rounded-full bg-red-700 font hover:bg-red-600 active:bg-red-800 active:border flex items-center gap-2 aria-label="Log out"'
      >
        <img className="invert h-4" src={logoutIcon} alt="LogOut" />
        Log out
      </button>
    </div>
  );
};

Header.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
  data: PropTypes.object
};


export default Header;
