import React, { useState } from 'react';
import YoutubeComponent from './YoutubeComponent';
const YoutubeList = (props) => {
    const { data } = props;
    // const [state, setState] = useState(data); // deep copy
    // const addItem = () => {
    //     setState([...state, {
    //         id: state.length +1,
    //         author: "doannv1",
    //         title: "somthing like reactjs",
    //         img: "https://loremflickr.com/320/240",
    //         views: 123
    //     }])
    // }

    // const data = ["1", "2", "3"];
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const [listData, setListData] = useState(data);
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input1);
        console.log(input2);

        setListData([...listData, {
            id: listData.length +1,
            author: input2,
            title: input1,
            img: "https://loremflickr.com/320/240",
            views: 123
        }])
        // listData.push(input);
    }
    const handleInput1Change = (event) => {
        setInput1(event.target.value)
    }

    const handleInput2Change = (event) => {
        setInput2(event.target.value)
    }
    return (
        <>
            <div className='ytb-list'>
                {listData.map((item) => { return <YoutubeComponent item={item} key={item.id}></YoutubeComponent> })}
            </div>
            {/* <button className='bt-addItem' onClick={addItem}>add item</button> */}
            <form className="container mb-4 mt-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" placeholder="asdasdasd" value={input1} onChange={handleInput1Change} ></input>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter text" value={input2} onChange={handleInput2Change} ></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>

    )
}

export default YoutubeList;