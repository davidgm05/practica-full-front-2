import {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import { getUserById, updateUser } from '../vite-project/src/core/services/userServices'
import { useNavigate } from 'react-router-dom'

const UpdateComponent = () => {
    const idToUpdateFromReducer = useSelector((state) => state.usersReducer.idToUpdate)
    const [idFromUpdate, setIdFromUpdate] = useState(undefined)
    const [userNotUpdated, setUserNotUpdated] = useState(undefined)
    const [updatedUser, setUpdatedUser] = useState(undefined)
    const navigate = useNavigate()
    useEffect(() => {
        setIdFromUpdate(idToUpdateFromReducer)
    },[])

    useEffect(() => {
        const getUserByIdFetch = async () => {
            const aux = await getUserById(idFromUpdate)
            setUserNotUpdated(aux)
        }
        getUserByIdFetch()
    },[idFromUpdate])

    const updateUserInputHandler = (e) => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value
        })
    }

    const updateUserHandler = async () => {
        await updateUser(idFromUpdate, updatedUser)
        navigate("/")
    }
    
  return (
    <div>
        {userNotUpdated && 
        <div>
        <input type="text" name='nombre' placeholder={userNotUpdated.nombre} onChange={(e) => updateUserInputHandler(e)}/>
        <input type="text" name='apellido' placeholder={userNotUpdated.apellido} onChange={(e) => updateUserInputHandler(e)}/>
        <button onClick={updateUserHandler}>actualizar</button>
        </div>
        }
    </div>
  )
}

export default UpdateComponent