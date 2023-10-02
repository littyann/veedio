import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center' >
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website" style={{width:"400px"}}>
       <h4><i  className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
          Media Player </h4>
<h6>
  Designed and built with all the love in the world by the Luminar team with the help of our contributors.
  
</h6>
<h6>Code licensed Luminar, docs CC BY 3.0.</h6>
<p>Currently v1.0.0.</p>
        </div>
        <div className="links d-flex flex-column" >
          <h4>Links</h4>
          <Link to={'/'}  style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:"none",color:"white"}}>Home</Link>
          <Link to={'/watch-history'} style={{textDecoration:"none",color:"white"}}>watch History</Link>

        </div>
        <div className="guides d-flex flex-column">
        <h4>Guids</h4>
          <Link to={'https://react.dev/'} target='_blank'  style={{textDecoration:"none",color:"white"}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
          <Link to={'https://en.wikipedia.org/wiki/Routing'} style={{textDecoration:"none",color:"white"}}>Routing</Link>

        </div>
        <div className="contact">
        <h4>Contact Us</h4>
          <div className="sub d-flex">
          
          
            <input type="text" className="form-control" placeholder='Enter Your Email Id' />
            <button className='btn btn-primary ms-3'>Subscribe</button>
          </div>
          <div className="icons fs-4 d-flex justify-content-evenly mt-3">
          <Link to={'https://react.dev/'} target='_blank'  style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-envelope"></i></Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-twitter"></i></Link>
          <Link to={'https://en.wikipedia.org/wiki/Routing'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-linkedin"></i></Link>
          <Link to={'https://en.wikipedia.org/wiki/Routing'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-instagram"></i></Link>


            </div>
        </div>

      </div>

      <p>Copyright &copy; 2023 Media Player. Build with React.</p>

    </div>
  )
}

export default Footer