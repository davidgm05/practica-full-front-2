

export const getUsersData  = async () => {
    const url = "http://localhost:3000/users/getusers";
    const users = await fetch(url);
    const response = await users.json();
    return response.data;
}

export const getUserById = async (id) => {
    const url = `http://localhost:3000/users/getuserbyid/${id}`
    const userById = await fetch(url);
    const response = await userById.json()
    return response.data
}

export const postUser = async (user) => {
    const url = "http://localhost:3000/users/postuser";
    const newUser = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const response = await newUser.json();
    return response.data;
}

// userServices.js
export const updateUser = async (id, userUpdate) => {
    const url = `http://localhost:3000/users/updateuser/${id}`;
    const updatedUser = await fetch(url, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userUpdate),
    });

    if (!updatedUser.ok) {
        throw new Error("Error en la actualización del usuario");
    }

    const response = await updatedUser.json();
    return response.data;
}


export const getFovouritesData = async () => {
    const url = "http://localhost:3000/favorites/getfavorites";
    const getFavorites = await fetch(url);
    const response = await getFavorites.json();
    return response.data
}

export const addFavorites = async (id) => {
    const url = `http://localhost:3000/favorites/addtofavorites/${id}`
    const adding = await fetch(url, {
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
    });
    const response = await adding.json()
    return response.data
}

export const deleteFavorites = async (id) => {
    const url = `http://localhost:3000/favorites/deletefavorites/${id}`
    const deleteToFavorites = await fetch(url, {
        method: "DELETE",
        headers:{
            "Content-type": "application/json",
        },
    });
    const response = await deleteToFavorites.json();
    return response.data
}