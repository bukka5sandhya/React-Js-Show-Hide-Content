import './index.css'
import React, {useState} from 'react'

const ShowHide = () => {
    const [showData,setShowData] = useState(false)

    const onClickHandle = () => {
        setShowData(!showData)
    };

    return(
        <>
        <div className="button-container">
        <button type="button" onClick={onClickHandle} className="button">{showData ? 'Hide': 'Show'}</button>
        {showData &&(
            <div className="content">
                <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. 
                Lorem Ipsum has been the industry's standard dummy<br/> 
                text ever since the 1500s, when an unknown printer took a galley <br />
                of type and scrambled it to make a type specimen book. It has <br />
                survived not only five centuries,but also the leap into electronic <br />
                typesetting, remaining essentially unchanged. It was popularised in <br />
                 the 1960s with the release of Letraset sheets containing Lorem <br />
                 Ipsum passages, and more recently with desktop.
                </p>
            </div>
        )}
        </div>
        </>
    )
}
export default ShowHide