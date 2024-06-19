export const LOAD_DATA ="LOAD_DATA";
export const GET_ID_TO_UPDATE = "GET_ID_TO_UPDATE"

export const loadData = (users) => {
    return{
        type: LOAD_DATA,
        payload: {
            users,
        }
    }
}

export const getIdToUpdate = (idToUpdate) => {
    return{
        type: GET_ID_TO_UPDATE,
        payload:{
            idToUpdate,
        }
    }
}