import React from 'react'
export const Footer = () => { 

  let footerStyle = {
    position:"absolute",
    top:"100vh",
    with:"100%"

  }
  return (
    <>
      <footer className='bg-dark  text-white py-3' style={footerStyle} > 
        <p className="text-center">
          CopyRight &copy; MyTodosList.com
        </p>
      </footer>
    </>
  )
}

