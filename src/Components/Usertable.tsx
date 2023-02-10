import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { bindActionCreators } from 'redux'
import { apiFunction } from '../api'
import { actionCreators } from '../State'
import { State } from '../State/reducers'
import Navbar from './Navbar'
import Usermodal from './Usermodal'



const Usertable: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [openUserModal, setOpenUserModal] = useState(false)
  const [currentUserDetails, setCurrenUserDetails] = useState({})
  const [tableData , setTableData] = useState([])
  const { createAction , setLoaderAction} = bindActionCreators(actionCreators, dispatch)
  const userList = useSelector((state: State) => state.dashboard.userList)
  const actionType = useSelector((state: State) => state.dashboard.actionType)
  const loader = useSelector((state: State) => state.dashboard.loader)
  const apiMethodFunction = (): string => {
    if (actionType === "Create")
      return "POST"
    if (actionType === "Update")
      return "PATCH"
    if (actionType === "Delete")
      return "DELETE"
    else return "nothing"
  }
  const apiURLFunction = (singleObject: any): string => {
    if (actionType === "Create")
      return "https://blue-journalist-bbrpv.ineuron.app:4000/user/create"
    if (actionType === "Update")
      return `https://blue-journalist-bbrpv.ineuron.app:4000/user/${singleObject._id}`
    if (actionType === "Delete")
      return `https://blue-journalist-bbrpv.ineuron.app:4000/user/${singleObject._id}`
    else return "nothing"
  }
  const userCRUDcallAPIFunction = () =>{
    apiFunction(apiMethodFunction() , apiURLFunction(currentUserDetails) , currentUserDetails ,createAction , actionType , userList , currentUserDetails , setLoaderAction )
    setOpenUserModal(false)
    setCurrenUserDetails({})
  }
  const userCRUDFunction = (singleObject :any) =>{
   if (actionType === "Update"){
      setCurrenUserDetails({...singleObject , firstName : singleObject.firstName , lastName : singleObject.lastName , phoneNumber : singleObject.phoneNumber , age : singleObject.age}) 
      setOpenUserModal(true)
    }
    if (actionType === "Delete")
    apiFunction(apiMethodFunction(), apiURLFunction(singleObject), {}, createAction, actionType, userList, singleObject , setLoaderAction)
    
  }
  const tableHeads: Array<string> = ["ID", "Name", "Phone", "Age", "Created At", "Updated At"]
  useEffect(() =>{
    setTableData(userList)
  },[userList])
  
  return (
    <div className='flex flex-col w-full'>
      <div className="flex flex-col items-center justify-center w-full p-26 " >
        <div className='shadow-md p-16 mt-2 flex flex-col items-center justify-center'>
        <div >
          <p className="text-blue-600 md:text-green-600">Action Type : {actionType}</p>
        </div>
        {
          actionType === "Create" &&
          <div>
          <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setCurrenUserDetails({_id : "" , firstName : "" , lastName : "" , phoneNumber : "" , age : ""}) ;
      setOpenUserModal(true) }}>
            Create User
          </button>
        </div> 
        }
        </div>
      </div>
      <div className='w-full p-2 lg:p-20' >
        {
          loader ? <div className='loader  '></div> : 
           <table className="border-collapse border border-slate-400 w-full">
          <thead>
            <tr>
              {tableHeads.map((singleHead) => <>
                <th className="border border-slate-300 ">{singleHead}</th>
              </>)}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((singleObject: any) => <>
              <tr className={`m-10 ${actionType !== "Create" ? "hover:bg-sky-700" : ""} ${actionType !== "Create" ? " cursor-pointer" : ""}`} onClick={() => userCRUDFunction(singleObject)}>
                <td className="border border-slate-300  items-center"><p className='p-2'>{`${singleObject._id}`}</p></td>
                <td className="border border-slate-300  items-center"><p className='pl-8'>{`${singleObject.firstName} ${singleObject.lastName}`}</p></td>
                <td className="border border-slate-300 p-5"><p className='pl-8'>{singleObject.phoneNumber}</p></td>
                <td className="border border-slate-300 p-5"><p className='pl-8'>{singleObject.age}</p></td>
                <td className="border border-slate-300 p-5"><p className='pl-8'>{singleObject.createdAt}</p></td>
                <td className="border border-slate-300 p-5"><p className='pl-8'>{singleObject.updatedAt}</p></td>
              </tr>
            </>)}
          </tbody>
        </table>
        }
       



      </div>




      {openUserModal && <div className='w-full'>
        <Usermodal actionType={actionType} openUserModal={openUserModal} setOpenUserModal={setOpenUserModal} currentUserDetails = {currentUserDetails}
        setCurrenUserDetails  = {setCurrenUserDetails} userCRUDcallAPIFunction = {userCRUDcallAPIFunction}
        />

      </div>}


    </div>

  )
}

export default Usertable