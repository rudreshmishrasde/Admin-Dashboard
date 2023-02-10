import { stringify } from 'querystring'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State'



const Crud: FC = () => {
  const dispatch = useDispatch()
  const { setactionTypeAction } = bindActionCreators(actionCreators, dispatch)
  const actionTypeArray: { actionType: string, color: string }[] = [
    {
      actionType: "Create",
      color: "bg-green-300",

    },
    {
      actionType: "Update",
      color: "bg-yellow-300"
    },
    {
      actionType: "Delete",
      color: "bg-red-300"
    },

  ]
  return (
    <div className="flex flex-col md:flex-row ">
      {actionTypeArray?.map((singleAction) =>
        <div className={`container ${singleAction.color} p-16 lg:p-28 m-2  md:m-6  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-sky-700 duration-300 `}
          onClick={() => setactionTypeAction(singleAction.actionType)}
        >
          <Link to={`/usertable`}>
            <p className='flex flex-row items-center justify-center'>{singleAction.actionType} User</p>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Crud