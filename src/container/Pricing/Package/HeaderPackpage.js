import React from 'react';
import "./style.scss";

const HeaderPackage = ({
    isSpecial = false,
    color = 'black',
    title,
    subTitle,
}) => {
    return (
        <div
            style={{ backgroundColor: color }}
            className="headerPackage"
        >
            <h2>{title}</h2>
            <h2>{subTitle}</h2>
            {
                isSpecial &&
                <div className="headerPackage__ron">
                    SPECIAL PRICE
                </div>
            }
        </div>
    )
}

export default HeaderPackage;