import React from 'react'
import UserComponents from '../components/userComponents'
import {useState, useEffect} from "react"
import { getUsersData } from '../vite-project/src/core/services/userServices'
import { useDispatch } from "react-redux"
import { loadData } from '../components/userActions'

const HomePage = () => {
    const [userList, setUserList] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
      const fetchUser = async () => {
       const aux = await getUsersData();
       setUserList(aux);
      }
      fetchUser()
    },[])

    useEffect(() => {
      if(userList.length > 0){
        dispatch(loadData(userList))
      }
    },[userList])
  return (
    <>
    <UserComponents/>
    </>
  )
}

export default HomePage