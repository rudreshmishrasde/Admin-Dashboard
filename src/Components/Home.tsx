import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { apiFunction } from '../api'
import { actionCreators } from '../State'
import { State } from '../State/reducers'
import Crud from './Crud'
import Navbar from './Navbar'
import Usertable from './Usertable'

const Home: FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-10 flex items-center justify-center' >
        <Navbar text={"Admin Dashboard"} onclickFunction={""} />
      </div>
      <div className='w-full p-10'>
        <Crud />
      </div>
    </div>

  )
}

export default Home