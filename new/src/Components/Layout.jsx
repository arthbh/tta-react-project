import React from 'react'
import "./Layout.css"

const Layout = () => {
  return (
    <>
    <div className='navbar' >
        <div id='abc'>LOREM IPSUM</div>
        <div>LINK1</div>
    </div>
    <div className='content' >
        <div> <p>THIS IS SOME CONTENT ALIGNED IN THE CENTER VETICALLY AND HORIZONTALLY</p> </div>
        <div></div>
    </div>
    <div className='footer' >
        <div> <p>THIS IS THE FOOTER CONTENT WHICH IS ALIGNED LEFT</p></div>
    </div>   
    </>
  )
}

export default Layout