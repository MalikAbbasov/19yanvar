import React, { useContext, useEffect, useState } from 'react'
import "./fetch.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext/WishlistContext'

function Fetchsection() {
    const [product, setProduct] = useState([])

    const{addWish} = useContext(WishlistContext)
    useEffect(() => {
        fetch("http://localhost:3400/")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div id="fetch">
                <div className="container">
                    <h5>OUR MENU</h5>
                    <h1>Discover Our Exclusive Menu</h1>
                    <div className="buttons">
                        <button className='meat'>
                            <i className="fa-solid fa-drumstick-bite"></i> Main
                        </button>
                        <button>
                            <i className="fa-solid fa-utensils"></i>
                            Desert
                        </button>
                        <button>
                            <i className="fa-solid fa-champagne-glasses"></i>
                            Drinks
                        </button>
                    </div>
                    <div className="cards">
                        {
                            product.map(x => (
                                <div className='card' key={x._id}>
                                    <img src={x.image} alt="" />
                                    <div className="text">
                                        <p>{x.name}</p>
                                        <h6>{x.ingridient}</h6>
                                    </div>
                                    <h2>$ {x.price}</h2>
                                    <div className="butons">
                                        <Link to={`detail/${x._id}`}><button className='detail'>Detail <i className="fa-regular fa-paper-plane"></i></button></Link>
                                        <button className='add'>Add basket</button>
                                        <button className='add' onClick={()=>addWish(x)}>Add wish</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <button>Make a Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default Fetchsection