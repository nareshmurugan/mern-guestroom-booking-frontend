import React from 'react'
import '../App.css'
import { BsFacebook, BsTwitterX,BsInstagram   } from "react-icons/bs";
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

function Footer() {
  return (
    <div >
         <div id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="social">
                            <Link to="/" className="anc"><BsInstagram /></Link>
                            <Link to="/" className="anc"><BsTwitterX /></Link>
                            <Link to="/" className="anc"><BsFacebook /></Link>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>Copyright &#169; 2045 <Link to="/">Your Site Name</Link> All Rights Reserved.</p>
						
						<p>Designed By <Link to="https://htmlcodex.com">HTML Codex</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer