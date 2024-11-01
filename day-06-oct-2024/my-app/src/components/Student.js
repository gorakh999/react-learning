const Student = (props) => {
    return (
        <div>
            <h1> Student Details</h1>
            {/* <p>Student First name: {props.student.firstName}</p>
            <p>Student Last name: {props.student.lastName}</p>
            <p>Student Email Address: {props.student.email}</p> */}
            <p>Array Data {props.data}</p> 
        </div>
    )
}

export default Student