'use client';

import React from "react";

//takes in user props
//user has username and email, userid, auth token
//has a logout function

//interface for props
interface Props {
  user: any;
  logout: any;
}

//navbar component
const Navbar: React.FC<Props> = ({ user, logout }) => {
  return (
    <div className="navbar shadow-md rounded-md p-2 m-2 flex flex-row min-w-full justify-center items-center text-center">
      <div className="w-full">
        <h1>Empyrean Ecommerce</h1>
      </div>
      <div className="flex-grow w-full p-2 m-2 text-black">
        <input
          type="text"
          className="w-full p-2 rounded-md"
          placeholder="Search items"
        />
      </div>
      <div className="flex flex-grow space-x-4 p-2 m-2 justify-end">
        <div className="">
          <a href="/" className="navbar-item">
            Home
          </a>
        </div>
        <div className="">
          <a href="/products" className="navbar-item">
            Products
          </a>
        </div>
        <div className="navbar-user-profile">
          {user ? (
            <div className="navbar-item">
              <button className="button is-primary" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-item">
              <a href="/login" className="button is-primary">
                Login
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Navbar;