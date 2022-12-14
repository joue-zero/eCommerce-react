
import React from "react";
import "./Menu.style.scss"
const MenuItem = ({ title, imageUrl, size }) => {

    return (
        <div className={`${size} menu-item`}>
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >

            </div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;