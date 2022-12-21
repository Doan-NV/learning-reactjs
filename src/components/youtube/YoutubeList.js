import React, { useState } from 'react';
import YoutubeComponent from './YoutubeComponent';
import FormComponent from '../handingForm/FormComponent';
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
        setInput1("")
        setInput2("")
        // listData.push(input);
    }
    const handleInput1Change = (event) => {
        setInput1(event.target.value)
    }

    const handleInput2Change = (event) => {
        setInput2(event.target.value)
    }
    const propsToForm = {handleSubmit, handleInput1Change, handleInput2Change, input1, input2}
    return (
        <>
            <div className='ytb-list'>
                {listData.map((item) => { return <YoutubeComponent item={item} key={item.id}></YoutubeComponent> })}
            </div>
            <FormComponent propsToForm={propsToForm}></FormComponent>
        </>

    )
}

export default YoutubeList;