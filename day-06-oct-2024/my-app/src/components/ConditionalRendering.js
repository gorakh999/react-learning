import { useState } from "react"

const ConditionalRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)


    function handleLogin(){
        setIsLoggedIn(true);
    }

    function handleLogout(){
        setIsLoggedIn(false);
    }

    if (isLoggedIn){
        return (
            <div>
                <p>Welcome User</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>Please Login!</p>
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

}

export default ConditionalRendering