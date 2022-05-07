import React, { useState } from 'react'

import ThreePlayground from './three/three-playground'

const FurniturePlayground = () => {
    const [buttonStatus, setButtonStatus] = useState(1)

    return (
        <div className="playground">
            <div className="controls">
                <div onClick={() => setButtonStatus(1)} className={buttonStatus == 1 ? "button b1 active" : "button b1"}>
                    <div className="thumb"></div>
                    <div className="info">
                        <div className="top">
                            <h4>Augustine</h4>
                            <p>$52<span>+</span></p>
                        </div>
                        <p>Chair</p>
                    </div>
                </div>
                <div onClick={() => setButtonStatus(2)} className={buttonStatus == 2 ? "button b2 active" : "button b2"}>
                    <div className="thumb"></div>
                    <div className="info">
                        <div className="top">
                            <h4>Savannah</h4>
                            <p>$78<span>+</span></p>
                        </div>
                        <p>Desk</p>
                    </div>
                </div>
                <div onClick={() => setButtonStatus(3)} className={buttonStatus == 3 ? "button b3 active" : "button b3"}>
                    <div className="thumb"></div>
                    <div className="info">
                        <div className="top">
                            <h4>Brunswick</h4>
                            <p>$68<span>+</span></p>
                        </div>
                        <p>Bookshelf</p>
                    </div>
                </div>
                <div onClick={() => setButtonStatus(4)} className={buttonStatus == 4 ? "button b4 active" : "button b4"}>
                    <div className="thumb"></div>
                    <div className="info">
                        <div className="top">
                            <h4>Charleston</h4>
                            <p>$59<span>+</span></p>
                        </div>
                        <p>Storage</p>
                    </div>
                </div>
                <div onClick={() => setButtonStatus(5)} className={buttonStatus == 5 ? "button b5 active" : "button b5"}>
                    <div className="thumb"></div>
                    <div className="info">
                        <div className="top">
                            <h4>Edisto</h4>
                            <p>$50<span>+</span></p>
                        </div>
                        <p>Side Table</p>
                    </div>
                </div>
                <div onClick={() => setButtonStatus(6)} className={buttonStatus == 6 ? "button b6 active" : "button b6"}>
                    <div className="thumb"></div>
                    <div className="info">
                        <div className="top">
                            <h4>Simon</h4>
                            <p>$65<span>+</span></p>
                        </div>
                        <p>Console</p>
                    </div>
                </div>
            </div>
            <ThreePlayground buttonState={buttonStatus}/>
        </div>
    )
}

export default FurniturePlayground