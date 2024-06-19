import { LOAD_DATA, GET_ID_TO_UPDATE } from "./userActions"

const initialState = {
    users: [],
    idToUpdate: undefined,
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_DATA:
            return{
                users: action.payload.users,
            }
        case GET_ID_TO_UPDATE:
            return{
                idToUpdate: action.payload.idToUpdate, 
            }
        default:
            return state
    }
}

export default usersReducer