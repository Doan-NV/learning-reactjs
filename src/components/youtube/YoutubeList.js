import React from 'react';
import YoutubeComponent from './YoutubeComponent';
const YoutubeList = (props) => {
    const { data } = props;
    return data.map(item => {
        return (
            <YoutubeComponent item={item} key={item.id}>
                <h1>
                    day la prop children
                </h1>
            </YoutubeComponent>
        )
    });
}

export default YoutubeList;