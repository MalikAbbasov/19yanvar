import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {
    return (
        <div>
            <nav id='navbar'>
                <div className="container">
                    <div className="page_name">
                        <h2>Tasty</h2>
                    </div>
                    <div className="pages">
                        <ul>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            ><li>Home</li></NavLink>
                             <NavLink
                                to="/add"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            ><li>Add</li></NavLink>
                             <NavLink
                                to="/basket"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            ><li>Basket</li> </NavLink>
                             <NavLink
                                to="/wishlist"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            > <li>Wishlist</li> </NavLink>
                             <NavLink
                             to="/detail"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            > <li>Detail</li> </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar