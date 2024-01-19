import React from 'react'
import "./recent.scss"

function Recentblog() {
    return (
        <div>
            <div id="recentblog">
                <div className="container">
                    <h5>BLOG</h5>
                    <h1>Recent Blog</h1>
                    <div className="cards">
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
                            <div className="text">
                                <div className="hover">
                                    <p className='date'>July 7, 2018</p>
                                    <p className='admin'>Admin</p>
                                </div>
                                <h5>Even the all-powerful Pointing has no control about the blind texts</h5>
                                <div className="comment">
                                    <p>Read more</p>
                                    <i class="fa-solid fa-message"><sup>3</sup></i>
                                </div>
                            </div>

                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg.webp" alt="" />
                            <div className="text">
                                <div className="hover">
                                    <p className='date'>July 7, 2018</p>
                                    <p className='admin'>Admin</p>
                                </div>
                                <h5>Even the all-powerful Pointing has no control about the blind texts</h5>
                                <div className="comment">
                                    <p>Read more</p>
                                    <i class="fa-solid fa-message"><sup>3</sup></i>
                                </div>
                            </div>

                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg.webp" alt="" />
                            <div className="text">
                                <div className="hover">
                                    <p className='date'>July 7, 2018</p>
                                    <p className='admin'>Admin</p>
                                </div>
                                <h5>Even the all-powerful Pointing has no control about the blind texts</h5>
                                <div className="comment">
                                    <p>Read more</p>
                                    <i class="fa-solid fa-message"><sup>3</sup></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recentblog