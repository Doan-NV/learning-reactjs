import React from 'react'

const YoutubeComponent = (props) => {
    const { item } = props;
    return (
        <>
            {/* {props.children} */}
            <div className="youtube-item" key={item.id}>
            <div className="youtube-image">
                <img src={item.img} alt="some thing"></img>
            </div>
            <div className="youtube-footer">
                <img src="https://picsum.photos/200" alt="" className="youtube-avatar" />

                <div className="youtube-info">
                    <h3 className="youtube-title">
                        {item.title}
                    </h3>
                    <h5 className="youtube-author">
                        {item.author}
                    </h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default YoutubeComponent