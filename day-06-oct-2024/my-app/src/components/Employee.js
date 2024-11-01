import React from "react"

class Employee extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: "Ramesh",
            lastName: "Rao",
            email: "ramesh@gmail.com"
        }
    }

    updateEmployee (){
        this.setState({
            firstName: "Ram",
            lastName: "Kumar",
            email: "ram@gmail.com"
        })
    }

    render (){
        return (
            <div>
                <h1> Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={() => this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}

export default Employee