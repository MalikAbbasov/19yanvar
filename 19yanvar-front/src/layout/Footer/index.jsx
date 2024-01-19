import React from 'react'
import "./footer.scss"

function Footer() {
  return (
    <div>
      <footer id='footer'>
        <div className="container">
          <div className="container_up">
            <div className="card tasty">
              <h3>Tasty</h3>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="icons">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="card opening">
              <h3>Opening Hours</h3>
              <ul>
                <li>Monday: <p> 08: - 22:00</p></li>
                <li>Tuesday: <p> 08: - 22:00</p></li>
                <li>Wednesday: <p> 08: - 22:00</p></li>
                <li>Thursday: <p> 08: - 22:00</p></li>
                <li>Friday: <p> 08: - 22:00</p></li>
                <li>Saturday: <p> 08: - 22:00</p></li>
                <li>Sunday: <p> 08: - 22:00</p></li>
              </ul>
            </div>
            <div className="card info">
              <h3>Contact Information</h3>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              <p>+ 1235 2355 98</p>
              <p>info@yoursite.com</p>
              <p>email@email.com</p>
            </div>
            <div className="card news">
              <h3>Newsletter</h3>
              <p>Far far away, behind the word mountains, far from the countries.</p>
              <div className="input">
                <input type="text" placeholder='Subscribe' />
                <i className="fa-regular fa-paper-plane"></i>
              </div>
            </div>
          </div>
          <div className="container_down">
            <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i>  by <span>Colorlib</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer