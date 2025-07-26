import React from 'react'
import './Navbar.css'
import rocket from '../assets/rocket.png'
import star from '../assets/glowing-star.png'
import idButton from '../assets/id-button.png'
import memo from '../assets/memo.png'
import order from '../assets/package.png'
import lock from '../assets/locked.png'
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon'
const Navbar = () => {
  return (
    <nav className=' align_center navbar'>
        <div className='align_center'>
            <h1 className='navbar_heading'>HamroBazzar</h1>
            <form action="" className=" align_center navbar_form">
                <input type="text" placeholder='Search product' className="navbar_search" />
                <button type='summit' className='search_buttton'>Search</button>
            </form>
        </div>
        <div className='align_center navbar_links'>
            <LinkWithIcon  title="Home" Link="/" emoji={rocket} />
            <LinkWithIcon  title="Products" Link="/products" emoji={star} />
            <LinkWithIcon  title="Login" Link="/login" emoji={idButton} />
            {/* <LinkWithIcon  title="Sign Up" Link="/signup" emoji={memo} />
            <LinkWithIcon  title="My Orders" Link="/myorders" emoji={order} />
            <LinkWithIcon  title="Logout" Link="/logout" emoji={lock} /> */}
            <a href="/cart" className="align_center">
            Cart <p className="align_center cart_counts">0</p>
            </a>
        </div>
    </nav>
  )
}

export default Navbar
