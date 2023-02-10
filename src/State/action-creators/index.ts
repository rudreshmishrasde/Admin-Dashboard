import { Dispatch } from "redux"
import { Action } from "../reducers/dashboardReducer"


export const createAction = (users : {"_id" : string,firstName : string , age : string , lastName : string  , phoneNumber : string , createdAt : string , updatedAt : string}[]) => {
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type : "CREATE",
            payload : users
        })
    }
}

export const setactionTypeAction = (actionType : string) => {
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type : "SET_ACTION_TYPE",
            payload : actionType
        })
    }
}
export const setLoaderAction = (actionType : string) => {
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type : "SET_LOADER",
            payload : actionType
        })
    }
}


