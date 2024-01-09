import React from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <header>
            <nav>
                <div className='left'>
                    <Link to='/' className='navlogo'>
                        <img src='/Amazon_logo.png' alt='logo' />
                    </Link>
                    <div className='nav_searchbaar'>
                        <input type="text" placeholder='Search...'></input>
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <Link to='/login'>signin</Link>
                    </div>
                    <div className='cart_btn'>
                        <Badge badgeContent={4} color="primary">
                          <Link to='/getproducts/:id'>  <ShoppingCartIcon id="icon"/></Link>
                        </Badge>
                            <p>cart</p>
                    </div>
                    <Avatar className='avtar'/>
                </div>
            </nav>
        </header>
    )
}
