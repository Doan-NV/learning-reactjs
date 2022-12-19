import React, { useState } from 'react'

const YoutubeComponent = (props) => {
    const { item } = props;
    const [dataYtb, setViewDataYtb] = useState(item);
    const addViews = () => {
        setViewDataYtb({...dataYtb, views: dataYtb.views +1})
    }
    return (
        <>
            <div className="youtube-item" key={item.id}>
            <div className="youtube-image">
                <img src={dataYtb.img} alt="some thing"></img>
            </div>
            <div className="youtube-footer">
                <img src="https://picsum.photos/200" alt="" className="youtube-avatar" />

                <div className="youtube-info">
                    <h3 className="youtube-title">
                        {dataYtb.title}
                    </h3>
                    <h3 className="youtube-views">
                        views: {dataYtb.views}
                    </h3>
                    <h5 className="youtube-author">
                        {dataYtb.author}
                    </h5>
                </div>
            </div>
            <button onClick={addViews}>add views</button>
        </div>
        </>
    )
}

export default YoutubeComponent