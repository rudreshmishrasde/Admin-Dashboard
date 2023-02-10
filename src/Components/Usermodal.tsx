import React, { FC } from 'react'
import { ageValidator, numberValidator, stringValidator } from '../regex'

interface userModalPropstype {
    actionType: string,
    openUserModal: boolean,
    setOpenUserModal: any,
    currentUserDetails: any,
    setCurrenUserDetails: any,
    userCRUDcallAPIFunction: any
}
const Usermodal: FC<userModalPropstype> = (props: {
    actionType: string, openUserModal: boolean, setOpenUserModal: any, currentUserDetails: any, setCurrenUserDetails: any,
    userCRUDcallAPIFunction: any
}): JSX.Element => {
    const userTextFields = [
        { text: "FirstName", value: props.currentUserDetails.firstName }, { text: "LastName", value: props.currentUserDetails.lastName }, { text: "PhoneNumber", value: props.currentUserDetails.phoneNumber }, { text: "Age", value: props.currentUserDetails.age }
    ]
    const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>, textFieldName: string) => {
        if (textFieldName === "FirstName" && stringValidator(e.target.value)) {
            props.setCurrenUserDetails({ ...props.currentUserDetails, firstName: e.target.value })
        }
        if (textFieldName === "LastName" && stringValidator(e.target.value))
            props.setCurrenUserDetails({ ...props.currentUserDetails, lastName: e.target.value })
        if (textFieldName === "PhoneNumber" && numberValidator(e.target.value))
            props.setCurrenUserDetails({ ...props.currentUserDetails, phoneNumber: e.target.value })
        if (textFieldName === "Age" && ageValidator(e.target.value))
            props.setCurrenUserDetails({ ...props.currentUserDetails, age: e.target.value })
    }
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  w-full"
            >
                <div className="relative  my-6 mx-auto max-w-3xl w-full" >
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                     <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t w-full">
                            <h3 className="text-3xl font-semibold">
                                {`${props.actionType} user`}
                            </h3>
                      </div>
                    <div className="relative p-6 flex-auto ">
                            {userTextFields.map((textfield) =>
                                <div className='p-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                                        {textfield.text}
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={textfield.text} type="text" placeholder={textfield.text} value={textfield.value} name={textfield.text} onChange={(e) => onChangeTextField(e, textfield.text)}></input>
                                </div>)}
                        </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => props.setOpenUserModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-sky-500 text-white active:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => props.userCRUDcallAPIFunction()}
                            >
                                {`Click to ${props.actionType} user`}

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default Usermodal