import axios from "axios"
    export function apiFunction(
        method : string,
        endpoint : string,
        data : any,
        dispatchFunction :any,
        actionType : string,
        userList : any,
        singleUser : any,
        setLoaderAction : any
      ) {
        return new Promise((resolve, reject) => {
            setLoaderAction(true)
          axios({
            method,
            // baseURL,
            url: endpoint,
            data,
            
          })
            .then((resp) => {
                if(actionType === "Create"){
                    userList.push(resp.data.data)
                    dispatchFunction(userList)
                }
                if(actionType === "Update"){
                   const index : number = userList.findIndex((user : any) => user._id === singleUser._id)
                    userList.splice(index , 1 , resp.data.data)
                    dispatchFunction(userList)
                }
                if(actionType === "get"){
                   dispatchFunction(resp.data.data)
                }
                if(actionType === "Delete"){
                    const newUserList  = userList.filter((user : any) =>{return singleUser._id !== user._id})
                    dispatchFunction(newUserList)
                }
                setLoaderAction(false)
              }
            )
            .catch((err) => {
             
            });
        }) 
    }
      

