import React, { useState } from 'react'

const FormComponent = (props) => {
    const {propsToForm} = props;
    const {handleSubmit, handleInput1Change, handleInput2Change, input1, input2} = propsToForm
    return (
        <div>
            <form className="container mb-4 mt-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" placeholder="asdasdasd" value={input1} onChange={handleInput1Change} ></input>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter text" value={input2} onChange={handleInput2Change} ></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent