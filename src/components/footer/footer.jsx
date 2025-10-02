import React from 'react'
import './footer.css'
import footerLogo from '../../../public/footerLogo.png'
function Footer() {

  return (
    <div className='body'>
     <footer>
    <div className="upper">
      <img src={footerLogo} alt="" />
      <p>Virtual Class for Zoom</p>
    </div>
    <h2>Subscribe to get our Newsletter</h2>
    <form className='form'>
      <input placeholder='Your Email' type="email" />
      <button>Subscribe</button>
    </form>
    <ul>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms & Conditions</a></li>
    </ul>
    <h3>© 2021 Class Technologies Inc. </h3>
</footer>
    </div>
  )
}

export default Footer
