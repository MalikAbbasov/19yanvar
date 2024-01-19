import React, { createContext, useState } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist",[])
    
    function addWish(item) {
        let elementIndex = wishlist.findIndex((x)=>x._id===item._id)
        if (elementIndex === -1) {
            setWishlist([...wishlist , item])
        }
    }
    function removeWish(item) {
        setWishlist(wishlist.filter((x)=>x._id !==item._id))
    }


    const data = {
        wishlist,addWish,removeWish
    }
  return (
    <div>
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    </div>
  )
}

export default WishlistProvider