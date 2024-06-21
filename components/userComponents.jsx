
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addFavorites, getUsersData, postUser } from '../vite-project/src/core/services/userServices'
import { getIdToUpdate, loadData } from './userActions'
import {useNavigate} from "react-router-dom"

const UserComponents = () => {
  const [userListData, setUsersListData] = useState(undefined)
  const [newUser, setNewUser] = useState({})
  const usersFromReducer = useSelector((state) => state.usersReducer.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(usersFromReducer){
      setUsersListData(usersFromReducer)
    }
  },[usersFromReducer])

  const createinputHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
  }

  const createUserHandler = async () => {
    postUser(newUser)
    const users = await getUsersData()
    dispatch(loadData(users))
  }

  const goFavoritePageHandler = () => {
    navigate("/favorites")
  }

  const addingFavoritesHandler = async (id) => {
    await addFavorites(id)
  }

  const updateUserHandler = (id) => {
    dispatch(getIdToUpdate(id))
    navigate("/update")
  }
  return (
    <div>
      <div>
        <input type="text" name='nombre' onChange={(e) => createinputHandler(e)}/>
        <input type="text" name='apellido' onChange={(e) => createinputHandler(e)}/>
        <button onClick={createUserHandler}>crear</button>
      </div>
      <div>
        <button onClick={goFavoritePageHandler}>favoritos</button>
      </div>
      <div className='donut-list'>
      {userListData && userListData.map((user, i) => (
        <div key={i}>
          <h2>{user.nombre} {user.apellido}</h2>
          <button onClick={() => updateUserHandler(user._id)}>actualizar</button>
          <div className='donut'>
        <div className='glaseado-donut'>
          <div className='sprinkles'></div>
          <div className='borde-dentro-donut'>
          <div className='hoyo-donut'>
            <h2>{user.nombre} {user.apellido}</h2>
          </div>
          </div>
        <button onClick={() => addingFavoritesHandler(user._id)}>añadir a favoritos</button>
        </div>
      </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UserComponents