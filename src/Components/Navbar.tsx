import React, { FC } from 'react'


interface NavbarPropTypes {
  text : string , onclickFunction : any
}
const Navbar : FC<NavbarPropTypes>= (props : {text : string , onclickFunction : any}) => {
  return (
    <div className="container w-full text-white bg-sky-700 p-10 shadow-xl" onClick={() => props.onclickFunction()}>
        <p>{props.text}</p>
    </div>
  )
}

export default Navbar