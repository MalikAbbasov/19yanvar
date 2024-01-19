import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext/WishlistContext'
import "./wishlist.scss"

function Wishlistpage() {
    const { wishlist, removeWish } = useContext(WishlistContext)
    return (
        <div>
            <div id="wish">
                <table id="customers">
                    <tr>
                        <th>Image</th>
                        <th>Name & Ingridient</th>
                        <th>Price</th>
                        <th>Buttons</th>
                    </tr>
                    {
                        wishlist.map(x => (

                            <tr key={x._id}>
                                <td><img src={x.image} alt="" /></td>
                                <td>{x.name} & {x.ingridient}</td>
                                <td>{x.price}</td>
                                <td className='remove'>
                                    <i onClick={() => removeWish(x)} className="fa-solid fa-heart-crack"></i>

                                </td>
                            </tr>


                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Wishlistpage