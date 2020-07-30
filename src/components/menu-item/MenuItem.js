import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div 
        className={`menu-item ${size ? size : ''}`}
    >
        <div 
            className="background-image"
            style = {{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">Shop Now</span>
        </div>
    </div>
)

export default MenuItem;