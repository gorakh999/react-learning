const Student = ({firstName, lastName, email}) => {
    return (
        <div>
            <h1> Student Details</h1>
            <p>Student First name: {firstName}</p>
            <p>Student Last name: {lastName}</p>
            <p>Student Email Address: {email}</p>
            {/* <p>Array Data {props.data}</p>  */}
        </div>
    )
}

export default Student