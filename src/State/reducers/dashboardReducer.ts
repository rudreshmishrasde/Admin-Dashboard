
const initialState = {
    userList: [],
    actionType: "Create",
    loader: false
}
export type Action =
    {
        type: string,
        payload?: any
    }
const reducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case "CREATE":
            return {
                ...state,
                userList: [...action.payload]
            };
        case "SET_ACTION_TYPE":
            return {
                ...state,
                actionType: action.payload
            };
        case "SET_LOADER":
            return {
                ...state,
                loader: action.payload
            };
        default:
            return state
    }

}
export default reducer