import React, { useState } from 'react';
import YoutubeComponent from './YoutubeComponent';
const YoutubeList = (props) => {
    const { data } = props;
    const [state, setState] = useState(data); // deep copy
    const addItem = () => {
        setState([...state, {
            id: state.length +1,
            author: "doannv1",
            title: "somthing like reactjs",
            img: "https://loremflickr.com/320/240",
            views: 123
        }])
    }
    return (
        <>
            <div className='ytb-list '>
                {state.map((item) => { return <YoutubeComponent item={item} key={item.id}></YoutubeComponent> })}
            </div>
            <button className='bt-addItem' onClick={addItem}>add item</button>
        </>

    )
}

export default YoutubeList;