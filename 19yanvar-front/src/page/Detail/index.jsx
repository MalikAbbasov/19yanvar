import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import "./detail.scss"

function Detail() {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3400/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Detail</title>
            </Helmet>
            <div id="detail">
                <h1>Detail Page </h1>

                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <div className="text">
                        <p>{product.name}</p>
                        <h6>{product.ingridient}</h6>
                    </div>
                    <h2>$ {product.price}</h2>
                    <div className="butons">
                        <button className='add'>Add basket</button>
                        <button className='add'>Add wish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail