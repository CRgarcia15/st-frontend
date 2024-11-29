import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [ currentUser, setCurrentUSer ] = useState(null)

    useEffect(() => {
        const getLoggedInUSer = async () => {
            let response = await fetch('http://localhost:7000/user/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUSer(user)
        }
        getLoggedInUSer()
    }, [])

    return ( 
        <CurrentUser.Provider value={{ currentUser, setCurrentUSer }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider

//currently not working, has no route or path to function in the back end.
//Need to create one and possibly re-structure the user routes.