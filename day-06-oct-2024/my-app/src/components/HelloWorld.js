import React from "react"

const HelloWorld = () => {

    function handleClick(){
        alert("button clicked")
    }

    const name = "Ramesh"

    const addition = 1 + 2;

    // const myElement = <h1>Hello World</h1>
    // return React.createElement('h1', null, 'Hello Gorakh')
    return  (
    <div>
    <h1 className="title">Title</h1>
    <h2>Heading 2</h2>
    <p>This is a paragraph</p>
    <p>{name}</p>
    <p>{addition}</p>
    <button onClick={handleClick}>Click Here</button>
    </div>
    )

}
export default HelloWorld