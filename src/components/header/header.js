import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
          <div className='cointainer'>
             <h1 style={{margin:"0px"}}>Blogs</h1>
             <nav className='cointainer-nav'>
               <Link to="/"><span className='navspan'>Home</span></Link> 
               <Link to="/createpost"><span className='navspan'>CreatePost</span></Link>
               {/* <Link to="/interview"><span className='navspan'>Interview Q&A</span></Link>  */}
             </nav>
            </div>
           
        </header>
       
        </>

    )
}

export default Header