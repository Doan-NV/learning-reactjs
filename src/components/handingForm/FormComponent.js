import React, { useState } from 'react'

const FormComponent = () => {
    const data = ["1", "2", "3"];
    const [input, setInput] = useState("");
    const [listData, setListData] = useState(data);
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input);
        setInput("")
        listData.push(input);
    }
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    return (
        <div>
            <form className="container mb-4 mt-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter text" value={input} onChange={handleInputChange} ></input>
                    <input type="text" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" placeholder="asdasdasd" value={input} onChange={handleInputChange} ></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <ul class="list-group container">
                {listData.map((item) => <li>{item}</li>)}
            </ul>

        </div>
    )
}

export default FormComponent