import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cartbtn = () => {
  // we get a state of additems 
  // write the same of the file not the function 

  const state = useSelector((state)=> state.addItem)
  return (
    <>
    <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className='fa fa-shopping-cart me-1'></span> cart ({state.length})
    </NavLink>
    </>
  )
}

export default Cartbtn;