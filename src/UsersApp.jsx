/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { UserList } from "./components/userList"
export const UsersApp = () => {

    const [endPoint, setEndPoint] = useState('users')

    const handleFetchUsers = () => {
        setEndPoint('comments')
    }

    return (
        <>
        <h1>Unrganized List</h1>
        <UserList endPoint={endPoint}></UserList>
        <button onClick={handleFetchUsers}>Press to call API</button>
        
        </>
    )
}
