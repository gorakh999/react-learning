import { useState } from "react"

const User = () => {
    // const [firstName, setFirstName] = useState('Ramesh')
    // const [lastName, setLastName] = useState('Kumar')
    // const [email, setEmail] = useState('ramesh@gmail.com')

    const [user, setUser] = useState({
        firstName: "Ramesh",
        lastName: "Kumar",
        email: "ram@gmail.com"
    })

    function updateUser(){
        // setFirstName('Ram')
        // setLastName('Raj')
        // setEmail('ram@gmail.com')
        setUser({
            firstName: "Ram",
            lastName: "Raj",
            email: "ram@gmail.com"
        })
    }
    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User