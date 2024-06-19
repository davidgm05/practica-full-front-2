import {useState, useEffect} from 'react'
import { deleteFavorites, getFovouritesData } from '../vite-project/src/core/services/userServices'

const FavoritesComponent = () => {
    const [favoritesList, setFavoritesList] = useState(undefined)
    useEffect(() => {
        const fetchFavorites = async () => {
            const aux = await getFovouritesData()
            setFavoritesList(aux)
        }
        fetchFavorites()
    },[])

    const deleteFavoritesHandler = async (id) => {
        await deleteFavorites(id)
        const aux = await getFovouritesData()
        console.log(aux)
        setFavoritesList(aux)
    }
  return (
    <div>
        {favoritesList && (
            <div>
                {favoritesList.map((favorite, i) => (
                    <div key={i}>
                        <p>{favorite.favoritos.nombre}</p>
                        <p>{favorite.favoritos.apellido}</p>
                        <button onClick={() => deleteFavoritesHandler(favorite._id)}>delete</button>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default FavoritesComponent