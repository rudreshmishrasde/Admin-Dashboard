import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Usertable from './Components/Usertable';
import { apiFunction } from './api';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './State';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/usertable",
    element: <Usertable />,
  },
]);

function App() {
  const dispatch = useDispatch()
  const {createAction  , setLoaderAction} = bindActionCreators(actionCreators , dispatch)
  useEffect(() =>{
    apiFunction('GET' ,'https://blue-journalist-bbrpv.ineuron.app:4000/users' , "" , createAction  , "get" , [] , {}, setLoaderAction)
   },[])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
